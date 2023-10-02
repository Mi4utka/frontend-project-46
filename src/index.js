import _ from 'lodash';

import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import genDiff from './index.js';

const getFileContent = (pathOfFile) => readFileSync(resolve(cwd(), pathOfFile), 'utf-8');
const parseFiles = (filepath1, filepath2) => {
  const firstObj = JSON.parse(getFileContent(filepath1));
  const secondObj = JSON.parse(getFileContent(filepath2));
  return genDiff(firstObj, secondObj);
};

const genDiff = (filepath1, filepath2) => {
  const obj1 = parseFiles(getFileContent(filepath1));
  const obj2 = parseFiles(getFileContent(filepath2));
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  let keys = _.union(keys1, keys2);
  keys = _.sortBy(keys);

  const getStr = keys.map((key) => {
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        return `  ${key}: ${obj1[key]}`;
      }
      return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]} `];
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return `- ${key}: ${obj1[key]}`;
    } return `+ ${key}: ${obj2[key]}`;
  });
  const tmp = getStr.flat();
  return `{\n  ${tmp.join('\n  ')}\n}`;
};

export default genDiff;
