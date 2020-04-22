#!/usr/bin/env node

import {
  welcome, game,
} from '../src/index.js';

import even from '../src/games/even.js';

const name = welcome();
game(name, even);
