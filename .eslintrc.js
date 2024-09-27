const rulesDirPlugin = require('eslint-plugin-rulesdir');
const { join } = require('path');
rulesDirPlugin.RULES_DIR = join(__dirname, './tools/custom-eslint-rules');

/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'react',
    'import',
    'jsx-a11y',
    'promise',
    'unicorn',
    'tailwindcss',
    'prettier',
  ],
  root: true,
  rules: {
    //custom-rules
    'rulesdir/check-naming-convention': 'warn',

    // Prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    // Tailwind CSS
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'error',
    'tailwindcss/no-contradicting-classname': 'error',

    // Prevent custom CSS
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ImportDeclaration[source.value=/\\.css$/]',
        message: 'Import of CSS files is not allowed. Use Tailwind classes instead.',
      },
    ],

    // Code structure and readability
    'max-len': [
      'error',
      { code: 100, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'no-nested-ternary': 'error',
    'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'k', 'x', 'y', 'z'] }],

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',

    // React
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-deprecated': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // General
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'no-unused-expressions': 'error',
    'no-throw-literal': 'error',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'no-else-return': 'error',
    'spaced-comment': ['error', 'always'],
    'no-duplicate-imports': 'error',

    // Import
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-restricted-paths': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-unused-modules': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['error', { 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'import/no-internal-modules': 'error',
    'import/no-relative-parent-imports': 'error',

    // Promise
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-new-statics': 'error',
    'promise/valid-params': 'error',

    // Unicorn
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-null': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-default-parameters': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
    tailwindcss: {
      config: 'tailwind.config.js',
      callees: ['classnames', 'clsx', 'ctl'],
      whitelist: ['.*'],
    },
  },
};
