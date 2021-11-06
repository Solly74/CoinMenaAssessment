module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  extends: "@react-native-community",
  rules: {
    "object-curly-spacing": [2, "always"],
    quotes: [
      "warn",
      "double",
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    "max-len": ["error", { code: 200 }],
    "no-multiple-empty-lines": "error",
  },
};
