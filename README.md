### Hexlet tests and linter status:
[![Actions Status](https://github.com/Mi4utka/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Mi4utka/frontend-project-46/actions)
[![GitHub Actions Demo](https://github.com/Mi4utka/frontend-project-46/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/Mi4utka/frontend-project-46/actions/workflows/github-actions-demo.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/eb5f22cf7a2dd569f213/maintainability)](https://codeclimate.com/github/Mi4utka/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/eb5f22cf7a2dd569f213/test_coverage)](https://codeclimate.com/github/Mi4utka/frontend-project-46/test_coverage)
https://asciinema.org/a/612160
https://asciinema.org/a/612161
get({
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
  })