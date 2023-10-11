import _ from 'lodash';

const objOrnot = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }
  if (typeof val === 'string') {
    return `'${val}'`;
  }
  return `${val}`;
};

const toPlain = (difftree) => {
  const iter = (tree, key = '') => {
    const filterTree = tree.filter((item) => item.status !== 'unchanged');
    const bb = filterTree.map((obj) => {
      const currentkey = `${key}${obj.key}`;
      if (obj.status === 'nested') {
        return iter(obj.children, `${currentkey}.`);
      }
      if (obj.status === 'added') {
        return `Property '${currentkey}' was added with value: ${objOrnot(obj.value)}`;
      }
      if (obj.status === 'deleted') {
        return `Property '${currentkey}' was removed`;
      }
      if (obj.status === 'changed') {
        return `Property '${currentkey}' was updated. From ${objOrnot(obj.value1)} to ${objOrnot(obj.value2)}`;
      }
      return null;
    });
    return bb.join('\n');
  };
  return iter(difftree);
};
export default toPlain;
