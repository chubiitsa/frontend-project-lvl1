#!/usr/bin/env node

import {
  welcome, game,
} from '../src/index.js';

import prime from '../src/games/prime.js';

const name = welcome();
game(name, prime);
