import request from '@/utils/request';

export default {
    getDataById(id) {
        return request({
            url: `https://gank.io/api/v2/post/${id}`,
            method: 'get'
        })
    },
    getCommentsById(id) {
        return request({
            url: `https://gank.io/api/v2/post/comments/${id}`,
            method: 'get'
        })
    }
}