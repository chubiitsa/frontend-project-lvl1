#!/usr/bin/env node

import { gameStart } from '../src/index.js';
import { gcd, description } from '../src/games/gcd.js';

gameStart(gcd, description);
