module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "react-native/react-native": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-native",
    "@typescript-eslint"
  ],
  "rules": {
  }
};
