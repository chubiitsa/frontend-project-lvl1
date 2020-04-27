#!/usr/bin/env node

import { gameStart } from '../src/index.js';
import { calc, description } from '../src/games/calc.js';

gameStart(calc, description);
