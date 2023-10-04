import getDiff from './getDiff.js';
import getParse from './parser.js';

const genDiff = (filepath1, filepath2) => getDiff(getParse(filepath1), getParse(filepath2));
export default genDiff;
