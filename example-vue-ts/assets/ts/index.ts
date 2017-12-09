import Vue from 'vue/dist/vue.esm';
import HelloWorld from './components/HelloWorld';
import HelloWorldWithTemplate from './components/HelloWorldWithTemplate';

var app = new Vue({
  el: '#app',
  components: {
    HelloWorldWithTemplate, HelloWorld
  },
  render(createElement) {
    return createElement('div', {}, [
      createElement(HelloWorldWithTemplate),
      createElement(HelloWorld)
    ]);
  },
});
