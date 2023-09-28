#!/usr/bin/env node

/* eslint-disable no-console */

import { Command } from 'commander';
import parseFiles from '../src/fs.js';

const program = new Command();
program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filePath1, filePath2) => {
    console.log(parseFiles(filePath1, filePath2));
  });
program.parse();
