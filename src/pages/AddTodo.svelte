<script lang="ts">
  import dayjs from '@/utils/dayjs'
  import { todos } from '@/store'
  import { saveAs } from 'file-saver'
  import Storage from '@/utils/localAccessData'
  let title: string = ''
  let content: String = ''
  let storage = new Storage('todoList')
  function handleAdd() {
    if (title == '' || content == '') {
      alert('请填写标题和内容！')
      return
    }
    // 更新任务列表
    todos.update((item: any) => {
      item = [
        ...item,
        {
          id: getId(),
          title,
          content,
          creationTime: dayjs().format('YYYY年MM月DD HH:mm:ss'),
        },
      ]
      storage.setItem({
        value: item,
        expires: 86400000,
      })
      return item
    })
    // 添加任务后清空输入栏
    title = ''
    content = ''
  }

  function handleExport() {
    const texts = []
    // 读取todos状态数组
    if ($todos.length == 0) {
      alert('请添加内容！')
      return
    }
    for (const todo of $todos) {
      let text = `###${todo.title}\n${todo.content}\n${todo.creationTime}\n`
      texts.push(text)
    }
    // 写入文件

    const blob = new Blob(texts, { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'todoList.md')
  }

  // 随机字母加时间戳生成ID
  const getId = function () {
    var result = []
    for (var i = 0; i < 4; i++) {
      var ranNum = Math.ceil(Math.random() * 25)
      result.push(String.fromCharCode(65 + ranNum))
    }
    return result.join('') + dayjs().unix()
  }

  //键盘事件enter
  window.onkeyup = function (e: any) {
    if (e.keyCode == 13) {
      handleAdd()
    }
  }
</script>

<div class="add-card">
  <div class="input-con">
    <input
      type="text"
      class="input-title"
      placeholder="请输入标题"
      bind:value={title}
    />
    <textarea
      class="input-content"
      cols="30"
      rows="10"
      placeholder="请输入内容"
      bind:value={content}
    />
  </div>
  <button class="add-btn" on:click={handleAdd}>添加</button>
  <button class="export-btn" on:click={handleExport}>导出</button>
</div>

<style lang="scss">
  .add-card {
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    display: flex;
    background-color: rgb(199, 228, 228);
    .input-con {
      display: flex;
      flex: 1;
      flex-direction: column;
      .input-title {
        height: 20%;
        margin-bottom: 1%;
      }
    }
    .add-btn,
    .export-btn {
      width: 8%;
      margin: 0 2%;
      border-radius: 4%;
      background-color: aqua;
    }
    .add-btn:active,
    .export-btn:active {
      cursor: pointer;
      background-color: #fff;
    }
  }
</style>
