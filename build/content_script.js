;(async () => {
  // eslint-disable-next-line no-undef
  await import(chrome.runtime.getURL('content.js'))
})()
