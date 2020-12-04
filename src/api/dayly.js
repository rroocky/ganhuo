import request from '@/utils/request';

export default {
    getData(size) {
        return request({
            url: `https://gank.io/api/v2/hot/likes/category/Girl/count/${size}`,
            data: '',
            method: 'get'
        })
    }
}