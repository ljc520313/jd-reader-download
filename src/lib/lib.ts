import axios from "axios"
import * as readline from "readline";
import { Category, Config, Chapter, CacheData, BookInfo } from "./types";
import * as fs from "fs";
import { parse as parseUrl } from "url";
import * as path from "path";
import { promisify } from "util"
import { CONFIG } from "./config";
import { UrlBuilder, FormatJson } from "../vendor/util";
import { getJSON } from "./fetch";


export async function GetBookInfo(bookId: string): Promise<CacheData<BookInfo>> {
    const filePath = path.join(CONFIG.BASE_DIR_RAW, "book-info.json")
    if (fs.existsSync(filePath)) {
        return Promise.resolve({
            via: "local",
            data: JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }))
        });
    }
    return getJSON<{ code: string, content: string }>(UrlBuilder.buildBookInfoUrl("/read/oR.action", bookId)).then(response => {
        if (parseInt(response.code) !== 0 || typeof response.content !== "string") {
            throw new Error(JSON.stringify(response));
        }
        const booksInfo = FormatJson.formatContent<BookInfo>(response.content);
        fs.writeFileSync(filePath, JSON.stringify(booksInfo), { encoding: "utf8" });
        return {
            via: "network",
            data: booksInfo
        }
    });
}

export async function GetCategory(): Promise<CacheData<Category>> {
    const filePath = path.join(CONFIG.BASE_DIR_RAW, "categories.json");
    if (fs.existsSync(filePath)) {
        return Promise.resolve({
            via: "local",
            data: JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }))
        });
    }
    return getJSON<{ code: string, content: string }>(UrlBuilder.buildCatalogInfoUrl("/read/lC.action")).then<CacheData<Category>>(response => {
        if (parseInt(response.code) !== 0 || typeof response.content !== "string") {
            throw new Error(JSON.stringify(response));
        }
        const categories = FormatJson.formatContent<Category>(response.content);
        fs.writeFileSync(filePath, JSON.stringify(categories), { encoding: "utf8" });
        return {
            via: "network",
            data: categories
        };
    });
}

export async function DownloadContent(chapterId: number): Promise<CacheData<Chapter>> {
    const filePath = path.join(CONFIG.BASE_DIR_RAW, chapterId + ".json");
    if (fs.existsSync(filePath)) {
        return Promise.resolve({
            via: "local",
            data: JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }))
        });
    }
    const chapterUrl = UrlBuilder.buildEpubCatalogDeatailInfoUrl("/read/gC.action", chapterId)
    return getJSON<{ code: string, content: string }>(chapterUrl).then<CacheData<Chapter>>(response => {
        if (parseInt(response.code) !== 0 || typeof response.content !== "string") {
            throw new Error(JSON.stringify(response));
        }
        const chapter = FormatJson.formatContent<Chapter>(response.content);
        fs.writeFileSync(filePath, JSON.stringify(chapter), { encoding: "utf8" });
        return {
            via: "network",
            data: chapter
        };
    });
}

export async function CreateDir(fullPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        fs.mkdir(fullPath, {
            recursive: true
        }, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
export async function DownloadImage(baseDir: string, url: string): Promise<string> {
    const parsed = parseUrl(url);
    const fileDir = path.join(baseDir, path.dirname(parsed.pathname));
    const filePath = path.join(fileDir, path.basename(parsed.pathname));
    const existed = await promisify(fs.exists)(filePath);
    if (existed) {
        return filePath;
    }
    await CreateDir(fileDir);
    const response = await axios.get(url, {
        responseType: "arraybuffer"
    });
    await promisify(fs.writeFile)(filePath, response.data, {
        encoding: "utf8"
    });
    return filePath;
}
export async function DownloadImages(baseDir: string, urls: string[]): Promise<void> {
    await Promise.all(urls.map(u => DownloadImage(baseDir, u)));
}


export async function delay(time: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve();
        }, time);
    });
}

export async function question(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    });

    return new Promise(resolve => {
        rl.question(query, answer => resolve(answer));
    });
}
