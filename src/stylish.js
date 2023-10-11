import _ from 'lodash';

const getCurrentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);
const getClosingIndent = (depth, intend = 4) => ' '.repeat(intend * depth - intend);

const thisValueToString = (thisValue, depth = 1) => {
  const iter = (value, depthIter) => {
    if (!_.isObject(value)) {
      return `${value}`;
    }
    const valueEntries = Object.entries(value);
    const valuemapped = valueEntries.map(([key, val]) => `${getCurrentIndent(depthIter)}  ${key}: ${iter(val, depthIter + 1)}`);

    return ['{', ...valuemapped, `${getClosingIndent(depthIter)}}`].join('\n');
  };
  return iter(thisValue, depth);
};

const toStylish = (tree) => {
  const iter = (data, depth = 1) => {
    const iterIndent = getCurrentIndent(depth);
    const closingIndent = getClosingIndent(depth);
    const tostring = data.flatMap((obj) => {
      if (obj.status === 'nested') {
        return `${iterIndent}  ${obj.key}: ${iter(obj.children, depth + 1)}`;
      }
      if (obj.status === 'added') {
        return `${iterIndent}+ ${obj.key}: ${thisValueToString(obj.value, depth + 1)}`;
      }
      if (obj.status === 'deleted') {
        return `${iterIndent}- ${obj.key}: ${thisValueToString(obj.value, depth + 1)}`;
      }
      if (obj.status === 'changed') {
        return [`${iterIndent}- ${obj.key}: ${thisValueToString(obj.value1, depth + 1)}`,
          `${iterIndent}+ ${obj.key}: ${thisValueToString(obj.value2, depth + 1)}`];
      }

      return `${iterIndent}  ${obj.key}: ${thisValueToString(obj.value, depth + 1)}`;
    });
    return ['{', ...tostring, `${closingIndent}}`].join('\n');
  };
  return iter(tree);
};
export default toStylish;
