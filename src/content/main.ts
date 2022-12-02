// @ts-ignore
import { createApp } from "vue";
import Content from "./app.vue";
import '../dev/HotUpdateService'
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
    createApp(Content).mount(mountEl);
    console.log('insert')
}

