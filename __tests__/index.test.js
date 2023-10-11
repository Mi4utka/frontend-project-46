/* eslint-disable */
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readContent = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const expected = readContent('epxectStylish.txt');
test('repeat', () => {
  expect(genDiff('__fixtures__/nested1.json', '__fixtures__/nested2.json')).toEqual(expected);
  expect(genDiff('__fixtures__/nested1.yaml', '__fixtures__/nested2.yaml')).toEqual(expected)
});
expect 