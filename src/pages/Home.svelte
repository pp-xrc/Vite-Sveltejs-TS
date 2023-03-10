<script>
  import { link, push, pop, replace } from 'svelte-spa-router'
  let myLink = '/todoList'
</script>

<h1 class="title">Home Page</h1>
<div class="link-con">
  <a use:link={myLink}> Go to todoList page </a>
  <a href="/todoList" use:link> Go to todoList page </a>
  <a use:link={'/other'}> Go to other page </a>
  <button
    on:click={() => {
      replace('/todoList')
    }}>replace函数跳转</button
  >
</div>

<style lang="scss">
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link-con {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding: 20px;
    a {
      margin: 0 20px;
    }
  }
</style>
