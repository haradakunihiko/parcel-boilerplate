import Vue from 'vue/dist/vue.esm';

import * as fs from 'fs';
const template = fs.readFileSync(__dirname + '/HelloWorldWithTemplate.html', 'utf8');

const HelloWorldWithTemplate = Vue.extend({
  template
});

export default HelloWorldWithTemplate;
