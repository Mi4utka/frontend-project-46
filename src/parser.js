import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';

const getFileContent = (pathOfFile) => readFileSync(resolve(cwd(), pathOfFile), 'utf-8');
const getParse = (pathOfFile) => JSON.parse(getFileContent(pathOfFile));
export default getParse;
