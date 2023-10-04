import getDiff from './getDiff.js';
import getParse from './parser.js';

const genDiff = (filepath1, filepath2) => getDiff(getParse(filepath1), getParse(filepath2));
console.log(genDiff('__tests__/__fixtures__/file1.json', '__tests__/__fixtures__/file1.json'));

export default genDiff;
