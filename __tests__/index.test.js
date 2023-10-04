import { expect, test } from 'jest';
import genDiff from '../src/index.js';

test('repeat', () => {
  expect(genDiff('__tests__/__fixtures__/file1.json', '__tests__/__fixtures__/file2.json')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
