import getDiffTree from './getDiff.js';
import getParse from '../parsers/parser.js';
import toStylish from './stylish.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const tree = getDiffTree(getParse(filepath1), getParse(filepath2));
  if (format === 'stylish') {
    return toStylish(tree);
  }
  return 'f';
};

export default genDiff;
