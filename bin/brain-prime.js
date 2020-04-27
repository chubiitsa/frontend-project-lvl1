#!/usr/bin/env node

import { gameStart } from '../src/index.js';
import { prime, description } from '../src/games/prime.js';

gameStart(prime, description);
