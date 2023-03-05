import { defineConfig, Terser } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import viteCompression from 'vite-plugin-compression'
import sveltePreprocess from 'svelte-preprocess'
import { resolve } from 'path' //nodejs内置模块不支持ts安装@types/node -D
import { visualizer } from 'rollup-plugin-visualizer' //打包配置分析工具
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      /* ... */
      preprocess: sveltePreprocess(),
      onwarn: (warning, defaultHandler) => {
        // don't warn on <marquee> elements, cos they're cool
        if (warning.code === 'a11y-distracting-elements') return;
        if (warning.code === 'a11y-click-events-have-key-events') return;
    
        // handle all other warnings normally
        defaultHandler(warning);
      },
    }),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    visualizer({
      emitFile: true, //是否被触摸
      filename: 'test.html', //生成分析网页文件名
      open: true, //在默认用户代理中打开生成的文件
      gzipSize: true, //从源代码中收集 gzip 大小并将其显示在图表中
      brotliSize: true, //从源代码中收集 brotli 大小并将其显示在图表中
    }),
  ],
  base: './', // 开发或生产环境服务的公共基础路径
  build: {
    assetsDir: 'static', // 静态文件的存放目录
    outDir: 'dist', // 打包输出文件名字
    minify: 'terser', //安装 npm/yarn add -D terser Terser 清除log/debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    emptyOutDir: true, //构建时清空outDir目录
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.ts', '.jsx', '.tsx', '.json'], //导入时要省略的别名
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/assets/style/main.scss';`,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
})
