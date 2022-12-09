import { Plugin } from 'vite'
import WebSocket, { WebSocketServer } from 'ws'
export default function ViteHMRChromeExtension(): Plugin {
  let wss: WebSocketServer | null
  let ws: WebSocket | null
  let timer: any
  const url = 'ws://localhost:2333'
  // 发送通知
  const send = (msg: any) => {
    if (!ws) return
    msg = JSON.stringify(msg)
    ws.send(msg)
  }
  // 清理资源
  // 如果不清空变量的引用，插件将不会自动退出
  const close = () => {
    ws && ws.close()
    wss && wss.close()
    clearTimeout(timer)
    ws = null
    wss = null
    timer = null
  }
  return {
    name: 'build-notifier',
    apply() {
      wss = new WebSocketServer({ port: 2333 })
      wss.on('connection', (client) => {
        ws = client
      })
      return true
    },
    closeBundle() {
      timer = setTimeout(() => send('watch-build-ok'), 500)
    },
    watchChange() {
      clearTimeout(timer)
    },
    closeWatcher() {
      close()
    }
  }
}
