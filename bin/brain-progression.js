#!/usr/bin/env node

import {
  welcome, game,
} from '../src/index.js';

import progression from '../src/games/progression.js';

const name = welcome();
game(name, progression);
