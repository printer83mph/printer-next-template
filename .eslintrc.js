module.exports = {
  extends: ['airbnb/base', 'next/core-web-vitals', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'next/core-web-vitals',
        'prettier',
      ],
      plugins: ['unused-imports'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['warn'],

        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],

        'import/prefer-default-export': 'warn',
        'unused-imports/no-unused-imports': 'error',
      },
    },
  ],
}
