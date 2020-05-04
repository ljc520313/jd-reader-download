import axios from "axios";
import { FormatJson, UrlBuilder } from "./vendor/util"
import fs from "fs";
import { Category, Chapter } from "./lib/types";

const instantce = axios.create({
    baseURL: "https://cread.jd.com",
    headers: {
        Cookie: "bg_color=gray; "
    }
});

const url = UrlBuilder.buildCatalogInfoUrl("/read/lC.action");
instantce(url, {
    method: "GET",
}).then<Category>(response => {
    return FormatJson.formatContent(response.data.content);
}).then<{ data: any }>((categories: Category) => {
    const chapterUrl = UrlBuilder.buildEpubCatalogDeatailInfoUrl("/read/gC.action", categories.catalogList[5].catalogId);
    return instantce(chapterUrl, {
        method: "GET"
    });
}).then<Chapter>(response => {
    return FormatJson.formatContent(response.data.content);
}).then(chapter => {
    const html = chapter.contentList[0].content;
    fs.writeFileSync("./logs/chapter.html", html);
})