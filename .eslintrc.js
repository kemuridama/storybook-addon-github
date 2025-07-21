module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react", "typescript-sort-keys"],
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  rules: {
    "import/no-unresolved": "off", // covered by typescript
  },
  settings: {
    react: { version: "detect" },
  },
};
