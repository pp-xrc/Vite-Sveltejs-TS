<script lang="ts">
  import { todos } from '@/store'
  import AddTodo from '@/pages/AddTodo.svelte'
  import Todo from '@/pages/Todo.svelte'
  import { link, push, pop, replace } from 'svelte-spa-router'
</script>

<h1 class="title">TodoList Page</h1>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
  on:click={() => {
    pop()
  }}
  class="goLast">返回上一级</span
>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
  on:click={() => {
    push('/other')
  }}
  class="goLast">go to Other Page</span
>
<div class="main">
  <div class="content">
    {#each $todos as todo, i (todo.id)}
      <Todo {...todo} />
    {/each}
  </div>
  <AddTodo />
</div>

<style lang="scss">
  .main {
    display: flex;
    height: 100%;
    flex-direction: column;
    .content {
      flex: 1;
      overflow: auto;
    }
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .goLast {
    cursor: pointer;
    margin: 20px;
    text-decoration: underline;
    color: #362ae2;
  }
</style>
