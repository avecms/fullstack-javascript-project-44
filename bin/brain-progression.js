#!/usr/bin/env node

import makeRound, { rules } from '../src/games/progression.js';
import runEngine from '../src/index.js';

runEngine(rules, makeRound);
