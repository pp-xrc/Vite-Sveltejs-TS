// Import the wrap method
// 动态导入组件和代码拆分
import wrap from 'svelte-spa-router/wrap.js' //该方法暂时不支持ts!注意引入的时候要加js后缀，不然提示找不到
// Note that Todo and AddTodo are not imported here anymore, so they can be imported at runtime
import Home from '@/pages/Home.svelte'
import NotFound from '@/pages/NotFound.svelte'
import Other from '@/pages/Other.svelte'

export default {
  '/': Home,

  // Wrapping the Author component
  '/todoList': wrap({
    asyncComponent: () => import('../pages/TodoList.svelte'),
  }),

  '/other': Other,

  // Catch-all route last
  '*': NotFound,
}
