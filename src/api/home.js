import request from '@/utils/request'
export default {
    getData(page, count) {
        return request({
            url: `https://gank.io/api/v2/data/category/Girl/type/Girl/page/${page}/count/${count}`,
            data: "",
            method: `get`
        })
    }
}