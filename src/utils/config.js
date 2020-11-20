let BASEURL = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    BASEURL = 'https://example.com/tieba'
}else{
    // 生产环境
    // BASEURL = 'http://127.0.0.1:38092'
}

export default BASEURL