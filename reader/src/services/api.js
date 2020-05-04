export const BASE_DIR = "/jdreader";
export const BOOKS_ROOT_DIR = `${BASE_DIR}/books/`;
function getJSON(url) {
    return fetch(url, {
        method: "GET"
    }).then(data => data.json());
}

export function getBooksDir() {
    const key = `${BASE_DIR}/books/list`;
    let promise = null
    try {
        const data = JSON.parse(localStorage.getItem(key) || "[]");
        if (data && data.length) {
            promise = Promise.resolve(data);
        }
    } catch (ex) {
        console.warn("getBooksDir: ", ex);
    }
    if (!promise) {
        promise = getJSON(`${BASE_DIR}/api/books`);
    }
    getJSON(`${BASE_DIR}/api/books`).then(res => {
        localStorage.setItem(key, JSON.stringify(res));
    });
    return promise;
}
/**
 * 
 * @param {string} id 书籍id
 * @returns {{"bookInfo": {"author": string,"bookId": number,"bookName": string,"bookType": number,"bookUrl": string,"readType": number,"readTypeMeaning": string,"totalPage": number},"id": string,"name": string}}
 */
export function getLocalBookInfo(id) {
    const books = JSON.parse(localStorage.getItem(`${BASE_DIR}/books/list`) || "[]");
    return books.filter(b => b.id === id)[0];
}

export function getBookCategoryTree(bookId) {
    return getJSON(`${BOOKS_ROOT_DIR}${bookId}/raw/categories.json`);
}
export function getChapterContent(bookId, chapterUrl) {
    return fetch(`${BOOKS_ROOT_DIR}${bookId}/html/${chapterUrl}`).then(response => {
        if (response.status === 404) {
            throw new Error(response.statusText);
        }
        return response.text();
    });
}

export function iterableTree(tree, callback) {
    if (!tree.children) {
        tree.children = [];
    }
    callback(tree);
    if (tree.children.length) {
        tree.children.forEach(t => iterableTree(t, callback));
    }
}

export function getRecentBooks(count) {
    count = parseInt(count);
    if (isNaN(count) || count <= 0) {
        count = 5;
    }
    return Promise.resolve(getBooksProgress().sort((prev, next) => next.date - prev.date).slice(0, count));
}

/**
 * 获取读书进度
 * @returns {[{}]}
 */
export function getBooksProgress() {
    try {
        return JSON.parse(localStorage.getItem(`${BASE_DIR}/books/progress`) || "[]");
    } catch (ex) {
        console.warn("getBooksProgress: ", ex);
        return [];
    }
}
/**
 * 设置读书进度
 * @param {[]} progressData 进度数据
 * @returns {void}
 */
export function updateBooksProgress(progressData) {
    localStorage.setItem(`${BASE_DIR}/books/progress`, JSON.stringify(progressData));
}