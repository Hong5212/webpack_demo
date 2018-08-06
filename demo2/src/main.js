// 引入js模块
import $ from 'jquery'
import {cube} from "./js/math";

// 引入json模块
import lessons from './assets/json/lessons'

// 引入css模块
import './assets/css/test2.less'

console.log(cube(3));

$(function () {
  const $app = $('#app')

  // 根据lessions生成一个列表显示到app中
  const $ul = $('<ul>')
  $app.append($ul)
  lessons.forEach(lesson => {
    $ul.append(`<li>课程名：<span class="lesson-name">${lesson.name}</span>, 时间：${lesson.days}天</li>`)
  })
})