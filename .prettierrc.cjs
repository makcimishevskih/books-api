module.exports = {
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'auto',
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: ['**.*.scss', '*.scss', '*.json'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
