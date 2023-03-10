# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

1.这是一个简单的 svelte 模板(todoList)，包含了常用的 vite 配置，及 svelte 自带的 store,将数据存储在 localStorage,简单的增删改查。

## 关于 Vite 配置 preprocessorOptions.scss.additionalData 全局引入 scss 文件无效问题

1.只有在 main.js 引入一个其他 scss 文件或者在.vue 文件中使用<style>，并且里面有内容，则 scss.additionalData 配置的全局 scss 文件就可以正确引入了，还建议我们在 scss.additionalData 引入的文件最好只写 scss 变量，别写 css 变量，因为 css 变量是运行时属性

## 关于 vite 清除 log 未生效问题(build.terserOptions)

1.vite build.minify 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Esbuild，它比 terser 快 20-40 倍，压缩率只差 1%-2%。Benchmarks 2.注意，在 lib 模式下使用 'es' 时，build.minify 选项不会缩减空格，因为会移除掉 pure 标注，导致破坏 tree-shaking。 3.当设置为 'terser' 时必须先安装 Terser。

## 关于 ts 报找不到模块“xxx”或其相应的 xxx 类型声明。

1.main.ts 提示找不到模块“xxx”或其相应的 xxx 类型声明，暂未找到解决办法！！！


