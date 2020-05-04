import { Log } from "./logger";

export interface Config {
    cookie: string,
    projectId: string,
    projectName: string,
    BASE_DIR_RAW: string,
    BASE_DIR_HTML: string,
    BASE_DIR_RES: string,
    logger: Log,
    delay: number
}
export interface CacheData<T> {
    via: "local" | "network"
    data: T
}
export interface Category {
    catalogList: Array<CategoryItem>
}
export interface CategoryItem {
    "anchor": string,
    "bookId": number,
    "catalogFid": number,
    "catalogId": number,
    "catalogName": string,
    "chapterUrl": string,
    "endPage": number,
    "isFree": number,
    "level": number,
    "sort": number,
    "startPage": number
}

export interface Chapter {
    contentList: Array<{ content: string }>
}


export interface BookInfo {
    bookInfo: {
        "author": string,
        "bookId": null,
        "bookName": string,
        "bookType": number,
        "bookUrl": string,
        "readType": number,
        "readTypeMeaning": string,
        "totalPage": number
    }
}


// export interface ResponseResult<T> {
//     data: T,
//     success: boolean
// }
// export interface Content {
//     content: string,
//     createDate: string,
//     editingContent: string,
//     id: string,
//     index: number,
//     projectId: string,
//     resourceId: string,
//     showUrls: ShowImage[],
//     type: "singleImg" | "editor"
// }
// export interface ShowImage {
//     outLink: string,
//     showUrl: string,
//     key: string
// }