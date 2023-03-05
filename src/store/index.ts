import { writable } from 'svelte/store'
import Storage from '@/utils/localAccessData'
let storage = new Storage('todoList')
// 从本地取值
let todoList = storage.getItem('todoList')
todoList ? null : (todoList = [])
export const todos: any = writable(todoList)
