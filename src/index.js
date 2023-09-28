import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  let keys = _.union(keys1, keys2);
  keys = _.sortBy(keys);

  const getStr = keys.map((key) => {
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        return `  ${key}: ${obj1[key]}`;
      }
      return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]} `];
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return `- ${key}: ${obj1[key]}`;
    } return `+ ${key}: ${obj2[key]}`;
  });
  const tmp = getStr.flat();
  return `{\n  ${tmp.join('\n  ')}\n}`;
};

export default genDiff;
