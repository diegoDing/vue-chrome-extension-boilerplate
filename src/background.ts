import './dev/HotUpdateService'

console.log(chrome.printerProvider)
chrome.printerProvider.onPrintRequested.addListener((printJob,resultCallback)=>{
    console.log('printJob',printJob)
    console.log('resultCallback',resultCallback)
})
