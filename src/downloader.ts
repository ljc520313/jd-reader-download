import { Category, CategoryItem, Chapter, CacheData } from "./lib/types";
import * as fs from "fs";
import * as path from "path";
import { GetCategory, DownloadContent, delay, GetBookInfo, DownloadImage, CreateDir } from "./lib/lib";
import { CONFIG, init } from "./lib/config";
import { config as PkgConfig } from "../package.json";
import { promisify } from "util";

(async function run() {
    if (PkgConfig.bookIds && PkgConfig.bookIds.length) {
        CONFIG.logger.debug("准备批量下载");
        PkgConfig.bookIds.reduce((prev, next) => {
            return prev.then(() => {
                return download(next);
            }).catch((error: any) => {
                CONFIG.logger.warn("发生异常: ", error.message);
                return download(next);
            });
        }, Promise.resolve(undefined)).then(() => {
            CONFIG.logger.debug("批量下载完成");
        }).catch(err => {
            CONFIG.logger.warn("书籍下载异常: ", err.message);
        });
    } else {
        await download();
    }
})();

async function download(projectId?: string) {
    await init(projectId);
    CONFIG.logger.debug(`${CONFIG.projectId} > 准备下载`);

    const bookInfo = await GetBookInfo(projectId);
    CONFIG.logger.debug(`图书信息\n ${JSON.stringify(bookInfo, null, "\t")}`);
    CONFIG.projectName = bookInfo.data.bookInfo.bookName;
    let categories: CacheData<Category> = await GetCategory();

    if (!categories.data || !categories.data.catalogList) {
        CONFIG.logger.warn(`${CONFIG.projectId} > 没有读取到书籍目录`);
        return;
    }

    const firstPlaceholderCategory: CategoryItem = null;
    const promise = categories.data.catalogList.reduce((prev, next) => {
        return prev.then(prevCategory => {
            CONFIG.logger.debug(`章节(${(prevCategory || {}).catalogName}) > 下载完成`)
            CONFIG.logger.debug(`章节(${next.catalogName}) > 准备下载`)
            return saveCategory(next).then(() => next);
        }).catch(err => {
            CONFIG.logger.warn(`上一章节下载失败, 继续下载下一章节: [${next.catalogId} ${next.catalogName}] `, err);
            return saveCategory(next);
        });
    }, Promise.resolve(firstPlaceholderCategory)).catch(err => {
        CONFIG.logger.warn("章节下载发生异常: ", err.message);
    });

    promise.then(() => {
        CONFIG.logger.debug(`${CONFIG.projectId} > 下载完成`);
    });
    return promise;
}

async function saveCategory(category: CategoryItem) {
    CONFIG.logger.debug(`${category.catalogName} > 准备下载`);

    const chapter = await DownloadContent(category.catalogId);
    if (!chapter.data || !chapter.data.contentList) {
        CONFIG.logger.warn(`${category.catalogName} > 没有读取到章节信息`);
        return;
    }
    await saveToHtml(category, chapter.data)
    CONFIG.logger.debug(`${category.catalogName} > 下载完成`);
    if (chapter.via === "network") {
        await delay(CONFIG.delay * 1000); //延迟3秒再执行下个章节下载, 防止过快请求被站点屏蔽.
    } else {
        CONFIG.logger.debug(`${category.catalogName} > 本地读取`);
    }
}

async function saveToHtml(category: CategoryItem, chapter: Chapter): Promise<string> {
    const htmlFilePath = path.join(CONFIG.BASE_DIR_HTML, category.chapterUrl).split("#")[0];
    const htmlFilExisted = await promisify(fs.exists)(htmlFilePath);
    if (htmlFilExisted) {
        return;
    }
    const fileContent = chapter.contentList[0].content;
    await CreateDir(path.dirname(htmlFilePath));
    await promisify(fs.writeFile)(htmlFilePath, fileContent, { encoding: "utf8" });

    const regImage = () => /src=["']([^"']+)["']/g;
    const matches = fileContent.match(regImage()) || [];
    const imagesUrls = matches.map(img => img.replace(regImage(), "$1"));
    return downloadResources(imagesUrls);
    // let index = 0;
    // chapter.contentList.reduce((prev, item) => {
    //     return prev.then(() => {
    //         fs.writeFileSync(path.join(CONFIG.BASE_DIR_HTML, `${categoryId}-${index++}.html`), item.content, { encoding: "utf8" });

    //         const regImage = () => /src=["']([^"']+)["']/g;
    //         const matches = item.content.match(regImage()) || [];
    //         const imagesUrls = matches.map(img => img.replace(regImage(), "$1"));
    //         return downloadResources(imagesUrls);
    //     });
    // }, Promise.resolve());
}

async function downloadResources(urls: string[]): Promise<string> {
    return urls.reduce((prevResult, url) => {
        return prevResult.then(result => {
            CONFIG.logger.debug(result);
            CONFIG.logger.debug(`资源文件开始下载 ${url}`);
            return DownloadImage(CONFIG.BASE_DIR_RES, url).then(destFilePath => `资源文件下载成功, 保存地址: ${destFilePath}`);
        }).catch(err => `${url} 资源文件下载失败: ` + err.message);
    }, Promise.resolve("开始下载资源"));
}
// process.addListener("unhandledRejection", err => {
//     console.warn("未处理 catch 异常: ", err);
// });