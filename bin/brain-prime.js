#!/usr/bin/env node

import getRound, { config } from '../src/games/prime.js';
import game from '../src/index.js';

game(config, getRound);
