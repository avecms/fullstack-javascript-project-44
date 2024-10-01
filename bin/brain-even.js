#!/usr/bin/env node

import makeRound, { rules } from '../src/games/even.js';
import runEngine from '../src/index.js';

runEngine(rules, makeRound);
