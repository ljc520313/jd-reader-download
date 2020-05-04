import { PC1 } from "./pc1";
// @ts-ignore
var pc1 = new PC1();
export function encryption(D: any) {

    return pc1.bytesToHex(pc1.pc1(pc1.utf16ToBytes(D), pc1.stringToBytes("0000000000000000"), false));
}
export function decryption(F: any) {
    return pc1.bytesToUtf16(pc1.pc1(pc1.hexToBytes(F), pc1.stringToBytes("0000000000000000"), true));
}