import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [];
//require.context(directory, useSubdirectories, regExp)
// directory: 要查找的文件路径
// useSubdirectories: 是否查找子目录
// regExp: 要匹配文件的正则
const files = require.context('@/router', true, /\.router.js$/);//
//require.context.keys()返回一个数组,数组中的每个元素传入require.context方法中,就可以导出相应的文件
console.log(files.keys().forEach(item=>{
  console.log(files(item));
}));
files.keys().forEach(item=>{
  routes.push(...files(item).default)
})

const router = new VueRouter({
  routes
})

export default router
