import Vue from 'vue';

var app = new Vue({
  el: '#app',
  render(createElement) {
    return createElement('h1', 'Hello world!');
  },
});
