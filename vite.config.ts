import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy';
import {resolve} from "path";
import ViteHMRChromeExtension from "./extend/ViteHMRChromeExtension";
// https://vitejs.dev/config/
export default defineConfig({
    mode:'dev',
    server:{
      hmr:true,
        watch:{
          usePolling:true
        }
    },
  plugins: [
      vue(),
      ViteHMRChromeExtension(),
      copy({
        targets:[
          {
            src:'./manifest.json',dest:'dist'
          }
        ],
        hook: 'writeBundle',
      }),
  ],
    build:{
        cssCodeSplit: false,
        brotliSize: false,
        rollupOptions:{
            input:{
                background:resolve(__dirname,'src/background.ts'),
                content:resolve(__dirname,'src/content/main.ts')
            },
            output:{
                entryFileNames:'[name].js',
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            }
        },
    }
})
