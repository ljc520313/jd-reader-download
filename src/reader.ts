import express from "express";
import fs from "fs";
import path from "path";
import { BookInfo } from "./lib/types";

const app = express();
const PORT: Number = 8002;

app.use("/books", express.static("./books/"));
app.use("/reader", express.static("./reader/dist/"));
app.use("/vendor", express.static("./reader/dist/vendor"));

app.get("/reader/book/:id", (req, res) => {
    res.sendFile(path.join(process.cwd(), "/reader/dist/index.html"));
});
app.get("/api/books", (req, res) => {
    
    const books = fs
        .readdirSync("./books", {
            encoding: "utf8"
        })
        .map(dir => ({
            id: dir,
            bookInfoPath: path.join("books", dir, "raw", "book-info.json"),
        }))
        .filter(item => fs.existsSync(item.bookInfoPath))
        .map(item => ({
            id: item.id,
            bookInfo: (JSON.parse(fs.readFileSync(item.bookInfoPath, {
                encoding: "utf8"
            })) as BookInfo).bookInfo
        }))
        .sort((prev, next) => prev.bookInfo.bookName > next.bookInfo.bookName ? 1 : -1)
        .map(item => ({
            id: item.id,
            name: item.bookInfo.bookName,
            bookInfo: item.bookInfo
        }));
    res.json(books);
});


app.listen(PORT, () => {
    console.log(`访问 http://localhost:${PORT}/reader 阅读电子书`);
});
