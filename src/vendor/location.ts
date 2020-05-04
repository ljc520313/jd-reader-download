import { Log } from "../lib/logger";
import { CONFIG } from "../lib/config";
const logger = new Log("location");
const obj = {};
export const location: any = new Proxy(obj, {
    get: function (target, prop) {
        let url = "";
        if (prop.toString() === "href") {
            url = `https://cread.jd.com/read/startRead.action?bookId=${CONFIG.projectId || '30602603'}&readType=3`;
        }
        logger.debug(`获取 location 属性 ${prop.toString()} , 返回 ${url}`);
        return url;
    }
})