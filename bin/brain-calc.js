#!/usr/bin/env node

import makeRound, { rules } from '../src/games/calc.js';
import runEngine from '../src/index.js';

runEngine(rules, makeRound);
