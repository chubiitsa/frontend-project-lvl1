#!/usr/bin/env node

import { gameStart } from '../src/index.js';
import { progression, description } from '../src/games/progression.js';

gameStart(progression, description);
