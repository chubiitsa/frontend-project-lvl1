#!/usr/bin/env node

import { welcome, sayHello, askName } from '../src/index.js';

welcome();
const name = askName();
sayHello(name);
