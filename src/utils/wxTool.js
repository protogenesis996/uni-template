/**
 * @resolve { object } phone screen info
*/
export const getSystemInfo = () => {
    return new Promise((resolve, reject) => {
         wx.getSystemInfo({
             success: (res) => {
              resolve(res)
             }, fail: _ =>  reject('无法获取显示器信息，请检查')
         })
     }).catch(e => e)
 }

 /** 
  * @param {string} node select node
  * @param {string} way single node or all node
  * @resolve { object }
 */
 
 // 获取节点信息
 export const getNodeInfo = (node, way) => {
     return new Promise((resolve, reject) => {
         setTimeout( () => {
            let query =  wx.createSelectorQuery()
            let queryWay;
             if (way === 'select') {
                 queryWay =  query.select(node)
             } else {    
                 queryWay = query.selectAll(node)
             }
             queryWay.boundingClientRect( function (res)  {
           
               if (res) {
                 resolve(res)
               } else {
                 reject('获取节点信息失败')
               }
             }).exec()
         },500)
     }).catch( e => e)
 }
 
 /**
  * @param {string } key LocalStorage data name
  * @param { object} data LocalStorage data value
 */
 export const setLocalStorage = (key, value)  => {
     return new Promise(  (resolve, reject) => {
         
         let data = typeof value === 'object' ? JSON.stringify(value) : value
 
          uni.setStorage({key, data, success: () => {
              resolve('存储成功')
          }, fail: () => reject('存储失败，请检查存储值类型')})
     }).catch(e => e)
 } 
 
 /**
  * @param {string} key getlocalStorage value
  * @resolve { object } localStorage result
 */
 export const getLocalStorage = (key) => {
     return new Promise( (resolve, reject) => {
         uni.getStorage({key, success: res => {
             if (res.errMsg === 'getStorage:ok') {
                 let result = JSON.parse(res.data)
                 resolve({result, code: '200'} )
             } else {
           
                 reject(res.errMsg)
             }
         }, fail: res => reject(res)})
     }).catch( e => e )
 }
 
 /**
  * @param {string} key remove localStorage value
  * 
 */
 export const removeLocalStorage = (key) => {
     return new Promise( (resolve, reject) => {
         uni.removeStorage({key, success: res => {
             resolve({res, code: '200'})
         },fail : res =>res})
     }).catch( e => e)
 }



