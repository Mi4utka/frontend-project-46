import getDiffTree from './getDiff.js';
import getParse from '../parsers/parser.js';
import toStylish from './formatters/stylish.js';
import toPlain from './formatters/plain.js';
import toJson from './formatters/json.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const tree = getDiffTree(getParse(filepath1), getParse(filepath2));
  if (format === 'stylish') {
    return toStylish(tree);
  }
  if (format === 'plain') {
    return toPlain(tree);
  }
  if (format === 'json') {
    return toJson(tree);
  }
  return null;
};

export default genDiff;
