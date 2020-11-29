module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
    }
};