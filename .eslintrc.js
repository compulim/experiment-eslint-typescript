/*! Copyright (C) Microsoft Corporation. All rights reserved. */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    // Make sure "react/prop-types" is on.
    'react/prop-types': 'error',

    // TypeScript: "no-empty-function" is superseded by "@typescript-eslint/no-empty-function".
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',

    // TypeScript: "no-unused-vars" is superseded by "@typescript-eslint/no-unused-vars".
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
