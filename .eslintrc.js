module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:storybook/recommended',
    'plugin:chai-friendly/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    allowImportExportEverywhere: false,
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react-hooks', 'prettier', 'cypress', 'chai-friendly'],
  rules: {
    'default-param-last': 0,
    'import/no-unresolved': [
      2,
      {
        ignore: [
          'hooks',
          'common',
          'reducers',
          'stateActions',
          'redux',
          'custom',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useAbortableEffect',
      },
    ],
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': [
      1,
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    'react/no-array-index-key': 'off',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'prettier/prettier': 'error',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    // TODO LATER: Remove this rule once we've fixed all the errors in seperate PR
    'react/jsx-no-useless-fragment': 'off',
  },
};
