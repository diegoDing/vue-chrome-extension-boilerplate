export const getBaiduHtml=()=>{
    return fetch('https://www.baidu.com').then(res=>{
        console.log(res.body,'yarn')
    })
}
