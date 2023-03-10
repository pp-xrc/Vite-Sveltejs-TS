<script>
  import { link, push, pop, replace } from 'svelte-spa-router'
</script>

<h1 class="title">Other Page</h1>
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
    replace('/')
  }}
  class="goLast">go to Home Page</span
>

<style lang="scss">
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
