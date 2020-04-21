#!/usr/bin/env node

import {
  welcome, sayHello, game, askName,
} from '../src/index.js';

import gcd from '../src/games/gcd.js';

welcome();
const name = askName();
sayHello(name);
game(name, gcd);
