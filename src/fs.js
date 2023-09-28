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

export default parseFiles;
