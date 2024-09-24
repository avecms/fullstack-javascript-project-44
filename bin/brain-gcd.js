#!/usr/bin/env node

import getRound, { config } from '../src/games/gcd.js';
import game from '../src/index.js';

game(config, getRound);
