#!/usr/bin/env node

import makeRound, { rules } from '../src/games/gcd.js';
import runEngine from '../src/index.js';

runEngine(rules, makeRound);
