#!/usr/bin/env node

import {
  welcome, sayHello, game, askName,
} from '../src/index.js';

import progression from '../src/games/progression.js';

welcome();
const name = askName();
sayHello(name);
game(name, progression);
