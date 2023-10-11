import _ from 'lodash';

const getCurrentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);
const getClosingIndent = (depth, intend = 4) => ' '.repeat(intend * depth - intend);

const thisValueToString = (thisValue, depth = 1) => {
  const iter = (value, depthIter) => {
    if (!_.isObject(value)) {
      return `${value}`;
    }
    const valueEntries = Object.entries(value);
    const valuemapped = valueEntries.map(([key, val]) => `${getCurrentIndent(depthIter)}${key}: ${iter(val, depthIter + 1)}`);

    return ['{', ...valuemapped, `${getClosingIndent(depthIter)}`, '}'].join('\n');
  };
  return iter(thisValue, depth);
};
const get = (data1, data2) => {
  const iter = (obj1, obj2, depth) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    let keys = _.union(keys1, keys2);
    keys = _.sortBy(keys);
    const sep = ' ';
    const getStr = keys.map((key) => {
      if (_.has(obj1, key) && _.has(obj2, key)) {
        if (_.isEqual(obj1[key], obj2[key])) {
          return `${sep.repeat(depth * 4)}${key}: ${thisValueToString(obj1[key], depth + 1)}`;
        }
        if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
          return iter(obj1[key], obj2[key], depth + 1);
        }
        return `${sep.repeat(depth * 4 - 2)}- ${key}: ${obj1[key]}\n${sep.repeat(depth * 4 - 2)} + ${key}: ${thisValueToString(obj2[key], depth + 1)}`;
      } if (_.has(obj1, key) && (!_.has(obj2, key))) {
        if (_.isObject(obj1[key])) {
          return `${sep.repeat(depth * 4 - 2)}- ${key}: {${(thisValueToString(obj1[key], depth + 1))}}`;
        }

        return `${sep.repeat(depth * 4 - 2)}- ${key}: ${thisValueToString(obj1[key], depth + 1)}`;
      }
      if (!_.has(obj1, key) && (_.has(obj2, key))) {
        if (_.isObject(obj2[key])) {
          return `${sep.repeat(depth * 4 - 2)}- ${key}: ${thisValueToString(obj2[key], depth + 1)}`;
        }
        return `${sep.repeat(depth * 4 - 2)}+ ${key}: ${thisValueToString(obj2[key], depth + 1)}`;
      }
    });

    return `{\n  ${getStr.join('\n  ')}\n}`;
  };

  return iter(data1, data2, 1);
};

console.log(get({
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
