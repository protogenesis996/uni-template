// 请求微信支付
// import { payOrder } from '@/api/order.js'
export  function requestWxPay (params)  {

    
    return new Promise( async (resolve, reject) => {
        const { data } = await payOrder(params)
        if (data.code === '200') {
           let res  = await wxPay(params.orderId, data.result.appId,data.result.nonceStr, data.result.prepayId, data.result.timeStamp, data.result.sign)
    
            if (res.code === '200') {
                resolve({result: res.result.errMsg, code: '200'})
            } else {
                reject({result: res.result.errMsg, code: '777'})
            }
        } else {
            reject({result: '向后端请求参数失败', code: '777'})
        }
    }).catch( e => e)
}

// 微信支付
export  const  wxPay =  ( appId, nonceStr, prepayId, timeStamp, sign) =>  {
    return new Promise(  (resolve, reject) => {
        wx.requestPayment({
            appId: appId,
            timeStamp: timeStamp,
            nonceStr: nonceStr,
            package: prepayId,
            signType: 'MD5',
            paySign: sign,
            success: async (res) => { 
                resolve( {result: res, code: '200'} )
            },
            fail (res) { 
                reject({result: res, code: '777'})
            }
        })
    }).catch( e => e)
}

