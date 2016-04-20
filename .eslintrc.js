module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "no-console": 0,
      "new-cap": 0,
      "strict": 0,
      "quotes": [2, "single"],
      "jsx-quotes": 1,
      "react/jsx-no-undef": 1,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1
    }
}
