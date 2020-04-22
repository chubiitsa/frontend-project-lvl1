#!/usr/bin/env node

import {
  welcome, sayHello, game, askName,
} from '../src/index.js';

import prime from '../src/games/prime.js';

welcome();
const name = askName();
sayHello(name);
game(name, prime);
