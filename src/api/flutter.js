import request from '@/utils/request';

export default {
    getData(page, count) {
        return request({
            url: `https://gank.io/api/v2/data/category/GanHuo/type/Flutter/page/${page}/count/${count}`,
            method: 'get'
        })
    }
}