import {getAllTabs} from "../tab";

export async function SendAllTabsMessage(message:any,recipient:any){
    const tabs=await getAllTabs()
    tabs.forEach(item=>{
        if (item.id){
            chrome.tabs.sendMessage(item.id,message,recipient)
        }
    })
}
