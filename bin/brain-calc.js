#!/usr/bin/env node

import {
  welcome, game,
} from '../src/index.js';

import calc from '../src/games/calc.js';

const name = welcome();
game(name, calc);
