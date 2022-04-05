module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'unused-imports'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off', // mutating redux state in redux-toolkit.
    'import/no-unresolved': 'off', // raw-loader
    'global-require': 'off', // raw-loader
    'react/no-array-index-key': 'off',
    'react/no-unescaped-entities': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // after react v17
    'react/jsx-uses-react': 'off', // after react v17
    'react/jsx-no-bind': 'off',
    'unused-imports/no-unused-imports': 'warn',
  },
};
