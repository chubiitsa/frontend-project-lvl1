#!/usr/bin/env node

import { gameStart } from '../src/index.js';
import { even, description } from '../src/games/even.js';

gameStart(even, description);
