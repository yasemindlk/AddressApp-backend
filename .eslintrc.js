module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["react-hooks"],
  rules: {
    "import/default": 0,
    "no-restricted-globals": 0,
    "no-console": 0,
    "no-underscore-dangle": 0,
    camelcase: 0,
  },
};
