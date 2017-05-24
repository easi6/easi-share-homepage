module.exports = {
  "env": {
    "browser": true
  },
  "globals": {
    "$": false,
    "_": false,
    "nunjucks": false,
    "Cookies": false
  },
  "parser": "babel-eslint",
  "rules": {
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "prefer-const": ["error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
    }],
    "no-var": "warn",
    "no-new-object": "error",
    "no-array-constructor": "error",
    "quote-props": ["warn", "as-needed"],
    "array-callback-return": "error",
    "prefer-template": "warn",
    "no-useless-escape": "error",
    "prefer-rest-params": "error",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "prefer-arrow-callback": "warn",
    "arrow-spacing": "error",
    "arrow-parens": ["error", "as-needed", {
      "requireForBlockBody": true
    }],
    "no-confusing-arrow": "warn",
    "no-useless-constructor": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-iterator": "warn",
    "dot-notation": "warn",
    "no-undef": "warn", // Todo:: change to "error" later. fixed all global variables like BMap, angular, etc. Using global decalration refered: http://eslint.org/docs/rules/no-undef
    "no-plusplus": ["warn", {
      "allowForLoopAfterthoughts": true
    }],
    "eqeqeq": ["error", "smart"],
    "no-case-declarations": "error",
    "no-unneeded-ternary": "error",
    "brace-style": ["error", "1tbs"],
    "spaced-comment": ["warn", "always"],
    "indent": ["error", 2],
    "space-infix-ops": "warn",
    "no-whitespace-before-property": "error",
    "newline-per-chained-call": ["warn", {
      "ignoreChainWithDepth": 2
    }],
    "space-in-parens": "error",
    "array-bracket-spacing": "error",
    "comma-style": "error",
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "no-extra-semi": "error",
    "semi-spacing": "error",
    "radix": ["error", "as-needed"],
    "new-cap": "warn",
    "no-underscore-dangle": "warn",
    "no-sequences": "warn"
  }
};

