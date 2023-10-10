import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);

  const getTree = sortedKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { status: 'nested', key, children: getDiffTree(obj1[key], obj2[key]) };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { status: 'added', key, value: obj2[key] };
    }
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { status: 'deleted', key, value: obj1[key] };
    }
    if (obj1[key] === obj2[key]) {
      return { status: 'unchanged', key, value: obj1[key] };
    }
    return {
      status: 'changed', key, value1: obj1[key], value2: obj2[key],
    };
  });
  return getTree;
};
console.log(getDiffTree({
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
}, {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
}));
