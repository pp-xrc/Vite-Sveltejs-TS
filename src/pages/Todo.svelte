<script lang="ts">
  import { todos } from '@/store'
  import Storage from '@/utils/localAccessData'
  export let title: String
  export let content: String
  export let creationTime: String
  export let id: String
  let storage = new Storage('todoList')
  function handleDelete(id: String) {
    todos.update((item: any) => {
      item = item.filter((filterItem: any) => {
        return filterItem.id != id
      })
      storage.setItem({ value: item, expires: 86400000 })
      return item
    })
  }
</script>

<div class="todo-page">
  <span class="del-btn" on:click={handleDelete(id)}>X</span>
  <h2 class="title">
    <span>{title}</span>
  </h2>
  <div class="content">{content}</div>
  <div class="time">{creationTime}</div>
</div>

<style lang="scss" type="text/scss">
  .todo-page {
    position: relative;
    padding: 2%;
    border: 1px solid #ccc;
    background-color: aquamarine;
    margin: 1% 0;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1%;
    }
    .time {
      text-align: end;
    }
  }

  .del-btn {
    position: absolute;
    font-weight: bolder;
    font-size: 36px;
    top: 4%;
    right: 1%;
    color: #fff;
    display: none;
  }
  .del-btn:hover {
    cursor: pointer;
  }
  .todo-page:hover {
    .del-btn {
      display: block;
      transition: 1s;
    }
  }
</style>
