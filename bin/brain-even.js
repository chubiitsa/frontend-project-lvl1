#!/usr/bin/env node

import {
  welcome, sayHello, game, askName,
} from '../src/index.js';

import even from '../src/games/even.js';

welcome();
const name = askName();
sayHello(name);
game(name, even);