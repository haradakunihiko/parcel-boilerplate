import Vue from 'vue/dist/vue.esm';
import HelloWorld from './components/HelloWorld';

var app = new Vue({
  el: '#app',
  components: {
    HelloWorld
  },
  render(createElement) {
    return createElement(HelloWorld);
  },
});
