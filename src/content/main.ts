// @ts-ignore
import { createApp } from "vue";
import Content from "./app.vue";
import {getBaiduHtml} from '../api'



getBaiduHtml()
insertVueDom()
function insertVueDom(){
    const MOUNT_EL_ID = "tiktokFansContainer";
    let mountEl = document.getElementById(MOUNT_EL_ID);
    if (mountEl) {
        mountEl.innerHTML = "";
    }
    mountEl = document.createElement("div");
    mountEl.setAttribute("id", MOUNT_EL_ID);
    document.body.appendChild(mountEl);
    const app=createApp(Content).mount(mountEl);
    app.$nextTick(() => {
        hot()
    })

}
function hot(){
    const ws = new WebSocket('ws://localhost:2333')
    ws.onmessage = (event) => {
        let msg = JSON.parse(event.data)
        if (msg === 'watch-build-ok') {
            window.location.reload()
            chrome.runtime.reload()
            console.log('浏览器,插件已刷新')
        }
    }
}
