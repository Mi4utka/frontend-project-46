import _ from 'lodash';

const get = (data1, data2) => {
  
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    let keys = _.union(keys1, keys2);
    keys = _.sortBy(keys);
    const sep = ' ';
    const iter = (obj1, obj2, depth) => {
    const getStr = keys.map((key) => {
      if (_.has(obj1, key) && _.has(obj2, key)) {
        if (obj1[key] === obj2[key]) {
          return `${sep.repeat(depth * 4)}${key}: ${obj1[key]}`;
        }
        if (_.isObject(obj1[key]) && _.isObject(obj2[key]))
        { return iter(obj1[key], obj2[key], depth + 1) };
        return `${sep.repeat(depth * 4 - 2)}- ${key}: ${obj1[key]}\n${sep.repeat(depth * 4 - 2)} + ${key}: ${obj2[key]}`;
      } if (_.has(obj1, key) && (!_.has(obj2, key))) {
        if (_.isObject(obj1[key]))
        {(}
        return `${sep.repeat(depth * 4 - 2)}- ${key}: ${obj1[key]}`;

      } if (_.isObject(obj2[key])) {} 
      return `${sep.repeat(depth * 4 - 2)}+ ${key}: ${obj2[key]}`;
    });

    return `{\n  ${getStr.join('\n  ')}\n}`;
  };

  return iter(data1, data2, 1);
};

console.log(get({
    "common": {
      "setting1": "Value 1",
      "setting2": 200,
      "setting3": true,
      "setting6": {
        "key": "value",
        "doge": {
          "wow": ""
        }
      }
    },
    "group1": {
      "baz": "bas",
      "foo": "bar",
      "nest": {
        "key": "value"
      }
    },
    "group2": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    }
  }, {
    "common": {
      "follow": false,
      "setting1": "Value 1",
      "setting3": null,
      "setting4": "blah blah",
      "setting5": {
        "key5": "value5"
      },
      "setting6": {
        "key": "value",
        "ops": "vops",
        "doge": {
          "wow": "so much"
        }
      }
    },
    "group1": {
      "foo": "bar",
      "baz": "bars",
      "nest": "str"
    },
    "group3": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    }
  }));
