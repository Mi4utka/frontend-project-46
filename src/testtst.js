import _ from 'lodash';

const getg = (data1, data2) => {
  const iter = (obj1, obj2, depth) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    let keys = _.union(keys1, keys2);
    keys = _.sortBy(keys);
    return keys.map((key) => `${key}: ${obj1[key]}`);
  };
  return iter(data1, data2, 1);
};
console.log(getg({
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
