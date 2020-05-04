import axios, { AxiosRequestConfig } from "axios";
import { CONFIG } from "./config";

const instantce = () => axios.create({
  baseURL: "https://cread.jd.com",
  headers: {
    cookie: CONFIG.cookie
  }
});
export function getJSON<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  return instantce().get(url, config).then(res => res.data);
}