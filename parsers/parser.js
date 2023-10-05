import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

const getFileContent = (pathOfFile) => readFileSync(resolve(cwd(), pathOfFile), 'utf-8');
const getParse = (pathOfFile) => {
  if (pathOfFile.endsWith('json')) { return JSON.parse(getFileContent(pathOfFile)); }
  if (pathOfFile.endsWith('yml') || pathOfFile.endsWith('yaml')) {
    return yaml.load(getFileContent(pathOfFile));
  }
  return null;
};
export default getParse;
