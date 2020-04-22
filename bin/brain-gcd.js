#!/usr/bin/env node

import {
  welcome, game,
} from '../src/index.js';

import gcd from '../src/games/gcd.js';

const name = welcome();
game(name, gcd);
