<script lang="ts">
  import { todos } from '@/store'
  import AddTodo from '@/pages/AddTodo.svelte'
  import Todo from '@/pages/Todo.svelte'
</script>

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
</style>
