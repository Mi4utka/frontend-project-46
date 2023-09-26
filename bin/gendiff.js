#!/usr/bin/env node

/* eslint-disable no-console */

import { program } from 'commander';

import fs from 'fs';

import * as path from 'path';

const command = (filepath1, filepath2) => {
  const object1 = filepath1.startsWith('/') ? path.resolve(filepath1) : process.cwd(filepath1);
  const object2 = filepath2.startsWith('/') ? path.resolve(filepath2) : process.cwd(filepath2);
  const object11 = JSON.parse(fs.readFileSync(object1));
  const object22 = JSON.parse(fs.readFileSync(object2));
  console.log(object11, object22);
};
program
  .version('0.0.1')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .action(command)
  .option('f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .parse();

const options = program.opts();
const { args } = program;
const { format } = options;
command(args, format);
