const ws = new WebSocket('ws://localhost:2333')
ws.onmessage = async function (event) {
  const msg = JSON.parse(event.data)
  if (msg === 'watch-build-ok') {
    if (chrome?.runtime?.reload) {
      console.log('插件刷新')
      chrome.runtime.reload()
    } else if (window?.location) {
      console.log('浏览器刷新')
      window.location.reload()
    }
  }
}
