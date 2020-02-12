import Vue from 'vue';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';  //如果没有出现样式，则需要全局引用一下样式
import app from './App.vue';
import './lib/mui/css/mui.css';
Vue.component(Header.name, Header);

  var vm = new Vue({
      el: '#app',
      data: {
          
      },
      render: c => c(app)
  })

  