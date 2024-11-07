module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  ignorePatterns: ['dist', 'vite.config.ts', 'vitest.config.ts', 'tests', '*.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    },
    'import/extensions': ['.js', '.jsx']
  },
  plugins: ['react-refresh', 'prettier', '@typescript-eslint'],
  rules: {
    'react/jsx-props-no-spreading': [
      'warn',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'enforce',
        exceptions: ['input', 'textarea']
      }
    ],
    'arrow-body-style': 'off',
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-no-bind': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-unsafe-optional-chaining': 'warn',
    'spaced-comment': 'warn',
    semi: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never'
      }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ]
  }
}
