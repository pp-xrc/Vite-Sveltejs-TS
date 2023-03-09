<script lang="ts">
  import { todos } from '@/store'
  import AddTodo from '@/pages/AddTodo.svelte'
  import Todo from '@/pages/Todo.svelte'
  import { link, push, pop, replace } from 'svelte-spa-router'
</script>

<div class="main">
  <span
    on:click={() => {
      pop()
    }}
    class="goLast">返回上一级</span
  >
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
    .goLast {
      cursor: pointer;
      margin: 20px;
      text-decoration: underline;
      color: #362ae2;
    }
  }
</style>
