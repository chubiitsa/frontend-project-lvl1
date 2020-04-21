#!/usr/bin/env node

import {
  welcome, sayHello, game, askName,
} from '../src/index.js';

import calc from '../src/games/calc.js';

welcome();
const name = askName();
sayHello(name);
game(name, calc);
