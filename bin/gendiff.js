#!/usr/bin/env node

/* eslint-disable no-console */

import { program } from 'commander';

import fs from 'fs';

import * as path from 'path';

const genDiff = (filepath1, filepath2) => {
  const object1 = process.cwd(`${filepath1}`) ;
  const object2 = path.resolve(`${filepath2}`);
  return `${filepath1}`
};

program
  .version('0.0.1')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .action(genDiff)
  .option('f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .parse();


const { arg1, arg2 } = program;

console.log(genDiff(arg1, arg2));
