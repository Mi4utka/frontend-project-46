import getDiff from './fuckme.js';
import getParse from '../parsers/parser.js';

const genDiff = (filepath1, filepath2) => getDiff(getParse(filepath1), getParse(filepath2));
export default genDiff;
