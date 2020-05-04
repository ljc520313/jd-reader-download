import { location } from "./location";
import { decryption, encryption } from "./encryption";

//pc  鍙互鑾峰彇bookid
export const urlPara = function (url: any, name: any, value?: any) {
    if (arguments.length == 2 || arguments.length == 1) {
        var B;
        if (arguments.length == 1) {
            var F = location.href;
            B = F.substring(F.indexOf("?") + 1).split("&")
        } else {
            B = url.substring(url.indexOf("?") + 1).split("&")
        }
        var D: any = {};
        var i: any, j: any;
        for (i = 0; j = B[i]; i++) {
            D[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length)
        }
        var H;
        if (arguments.length == 1) {
            H = D[arguments[0].toString().toLowerCase()]
        } else {
            H = D[name.toLowerCase()]
        }
        if (typeof (H) == "undefined") {
            return ""
        } else {
            return H
        }
    } else {
        if (arguments.length == 3) {
            if (value) {
                if (value === undefined) {
                    value = ""
                }
            }
            var J = url.toLowerCase();
            if (J.indexOf(name.toLowerCase() + "=") < 0) {
                if (url.indexOf("?") < 0) {
                    return url + "?" + name + "=" + value
                } else {
                    return url + "&" + name + "=" + value
                }
            }
            var K = url.substring(0, url.indexOf("?") + 1);
            var B = url.substring(url.indexOf("?") + 1);
            var L = B.toLowerCase().indexOf(name.toLowerCase() + "=");
            var M = B.substring(0, L + name.length + 1);
            var A = B.substring(L + name.length + 1);
            var I = A.indexOf("&");
            if (I < 0) {
                K += M + value
            } else {
                K += M + value + "&" + A.substring(I + 1)
            }
            return K
        }
    }
};

export function getUrlParaValue(name: any) {
    return urlPara(location.href, name)
}

export function paraBuilder(obj: any) {
    var paras = "";
    var notNullObj = obj || {};
    var loop = 0;
    for (var p in notNullObj) {
        if (loop == 0) {
            paras += '"' + p + '":"' + notNullObj[p] + '"'
        } else {
            paras += ',"' + p + '":"' + notNullObj[p] + '"'
        }
        loop += 1;
    }
    paras = "{" + paras + "}";
    return paras;
}

export var UrlBuilder = {
    buildBookInfoUrl: function (url: string, bookId: any) {
        var readType = getReadTypeFromUrl();
        var paras = { "bookId": bookId };
        var E = paraBuilder(paras);
        // console.log(encryption(E))
        url = url + "?k=" + encryption(E) + "&readType=" + readType;
        //alert(url)
        // console.log(url)
        return url;
    }, buildPdfBookInfoUrl: function (url: string, G: string) {
        var bookId = getBookFromUrl();
        var readType = getReadTypeFromUrl();
        var F = { "bookId": bookId, "pageNum": "1-" + G };
        var B = paraBuilder(F);
        return url + "?k=" + encryption(B) + "&readType=" + readType
    }, buildCatalogInfoUrl: function (C?: string, D?: any) {
        var bookId = getBookFromUrl();
        var readType = getReadTypeFromUrl();
        var para = { "bookId": bookId };
        var F = paraBuilder(para);
        var url = C + "?k=" + encryption(F) + "&readType=" + readType + "&bookId=" + bookId + "&orderId=" + getOrderIdFromUrl();
        //  console.log(url)//z 涓虹┖
        return url;
    }, buildEpubCatalogDeatailInfoUrl: function (url: any, chapterId: any) {
        var bookId = getBookFromUrl();
        chapterId = parseInt(chapterId);
        var readType = getReadTypeFromUrl();
        var B = { "bookId": bookId, "chapterId": chapterId };
        var F = paraBuilder(B);
        url = url + "?k=" + encryption(F) + "&readType=" + readType + "&orderId=" + getOrderIdFromUrl();
        //console.log(sid)//z 涓虹┖
        return url;
    }, buildDeviceSignInUrl: function (url: string) {//鑷繁鏍规嵁pc娣诲姞
        //var C = jQuery.browsername;
        //var B = jQuery.browser.version;
        var A = getReadTypeFromUrl();
        return url + "?uuid=&readType=" + A + "&client=&clientVersion=&appType=1&t=" + Math.random()
    }, buildDeviceHearBeatUrl: function (url: string) {
        var C = getBookFromUrl();
        //var D = jQuery.browsername;
        //var B = jQuery.browser.version;
        var A = getReadTypeFromUrl();
        return url + "?uuid=&readType=" + A + "&client=&clientVersion=&itemId=" + C + "&appType=1&t=" + Math.random()
    }, buildDeviceCancelUrl: function (url: string) {
        var A = getReadTypeFromUrl();
        return url + "?uuid=&readType=" + A + "&client=&clientVersion=&appType=1&t=" + Math.random()
    }
};
//pc 鑾峰彇bookid
export function getBookFromUrl() {
    var url = location.href;
    //pc 鑾峰彇bookid
    return urlPara(url, "bookId");
}
//pc 鑾峰彇readtype
export function getReadTypeFromUrl() {
    var url = location.href;
    //pc 鑾峰彇readtype
    return urlPara(url, "readType");
}
export function getOrderIdFromUrl() {
    var url = location.href;
    if (url.indexOf("/read/") >= 0 && url.indexOf(".html") >= 0) {
        var startIndex = url.indexOf("/read/") + "/read/".length;
        var endIndex = url.indexOf(".html");
        var para = url.substring(startIndex, endIndex);
        var array = para.split("-");
        if (array.length > 2) {
            return parseInt(array[1]);
        }
        return -1;
    } else if (url.indexOf("/catalog/") >= 0 && url.indexOf(".html") >= 0) {
        var startIndex = url.indexOf("/catalog/") + "/catalog/".length;
        var endIndex = url.indexOf(".html");
        var para = url.substring(startIndex, endIndex);
        var array = para.split("-");
        if (array.length > 2) {
            return parseInt(array[1]);
        }
        return -1;
    } {

    }
    return "";
}

export var FormatJson = {
    format: function (data: string) {
        var dataRet = null;
        try {
            dataRet = eval("(" + data + ")")
        } catch (E) {
            dataRet = eval(data)
        }
        return dataRet
    }, formatContent: function <T>(data: any): T {
        var dataRet = null;
        try {
            dataRet = eval("(" + decryption(data) + ")")
        } catch (E) {
            dataRet = eval(decryption(data))
        }
        return dataRet
    }
};

// @ts-ignore
String.prototype.replaceAll = function (s1: string | RegExp, s2: any) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

// @ts-ignore
String.prototype.replaceLinkFromHttpToHttps = function () {
    return this
        .replaceAll("http://storage.360buyimg.com/", "https://storage.360buyimg.com/")
        .replaceAll("http://img30.360buyimg.com/", "https://img30.360buyimg.com/")
        .replaceAll("http://img10.360buyimg.com/", "https://img10.360buyimg.com/")
        .replaceAll("http://jss.360buy.com", "https://jss.jd.com")
        .replaceAll("http://jss.jd.com", "https://jss.jd.com");
}