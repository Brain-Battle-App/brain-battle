const { ESLint } = require('@eslint/js');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: require('eslint-plugin-react'),
      perfectionist: require('eslint-plugin-perfectionist'),
    },
    languageOptions: {
      globals: require('globals'),
    },
    rules: {
      'quotes': ['error', 'single'], // Enforce single quotes (change to 'double' for double quotes)
      'jsx-quotes': ['error', 'prefer-single'], // Enforce single quotes in JSX
      'perfectionist/sort-imports': [
        'error',
        {
          'groups': [['builtin', 'external', 'internal', 'sibling', 'index']],
          'type': 'alphabetical',
          'order': 'asc',
          'internal-pattern': ['@/**'],
        },
      ],
    },
  },
];
