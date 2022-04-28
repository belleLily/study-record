// 每次都示例化一个class，不推荐

import axios from 'axios'
const VUE_APP_URL = process.env.VUE_APP_URL

class HttpRequest {
    constructor() {
        this.baseUrl = VUE_APP_URL
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
        }
        return config
    }
    interceptors(instance) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            const {
                data,
                status
            } = res
            return {
                data,
                status
            }
        }, error => {
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance)
        return instance(options)
    }
}
export default new HttpRequest()