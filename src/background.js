import './dev/HotUpdateService';
console.log(chrome.printerProvider, 'sa');
chrome.printerProvider.onPrintRequested.addListener((printJob, resultCallback) => {
    console.log('printJob', printJob);
    console.log('resultCallback', resultCallback);
});
//# sourceMappingURL=background.js.map