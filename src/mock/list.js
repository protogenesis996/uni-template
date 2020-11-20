import { request } from '@/utils/request'

// 长数据1
export function example1 () {
    return request({
        url: '/page=1'
    })
}
// 长数据2
export function example2 () {
    return request({
        url: '/page=2'
    })
}