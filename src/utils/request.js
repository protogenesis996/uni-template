import BASEURL from './config'
import Tip from './tip'
// import { removeLocalStorage, getLocalStorage } from '@/plug/wxPlug.js'

const request = async(params = {}) => {
  Tip.loading();
    let data = params.query || {};
    let url = BASEURL + params.url;
    let method = params.method
    let token = uni.getStorageSync('token');
    
    // if (params.method === 'GET') {}
    const res = await uni.request({
        url: url,
        method: method,
        data: data,
        header: {
            'Content-Type': 'application/json',
            token
        }
    })
    Tip.loaded();
    console.log(res);


  return res[1];


}

module.exports = {
    request
  }