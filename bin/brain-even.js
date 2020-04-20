#!/usr/bin/env node

import {
  welcome, sayHello, even, askName,
} from '../src/index.js';

welcome();
const name = askName();
sayHello(name);
even(name);
