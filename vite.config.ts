import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy';
import path from "path";
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
          },
            {
                src:'./build/content_script.js',
                dest:'dist'
            }
        ],
        hook: 'writeBundle',
      }),
  ],
    build:{
        cssCodeSplit: false,
        reportCompressedSize: false,
        rollupOptions:{
            input:{
                background:path.resolve(__dirname,'src/background.ts'),
                content:path.resolve(__dirname,'src/content/main.ts')
            },
            output:{
                entryFileNames:'[name].js',
                chunkFileNames: `src/package/[name].js`,
                assetFileNames: `[name].[ext]`,
            }
        },
    }
})
