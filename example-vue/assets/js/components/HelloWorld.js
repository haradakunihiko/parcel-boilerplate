import fs from 'fs';

const template = fs.readFileSync(__dirname + '/HelloWorld.html', 'utf8');

const HelloWorld = {
  template
};

export default HelloWorld;
