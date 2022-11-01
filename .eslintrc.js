/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
    settings: {
        'react': {
            'version': 'detect'
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react-hooks', 'react'],
    rules: {
        'react/prop-types': [0],
        quotes: ['error', 'single'],
        semi: [1],
        'react/jsx-indent': [1],
        'no-multi-spaces': [1],
        'indent': 'off',
        // 'indent': [2],
        // 'indent': ["error", 2],
        // 'indent': ['error', 'tab'],
        'react/jsx-newline': [2, { prevent: true }],
        'no-trailing-spaces': [1],
        'no-multiple-empty-lines': [1, { max: 1 }],
        'space-infix-ops': [1],
        'object-curly-spacing': [1, 'always'],
        'comma-spacing': [1],
        'react-hooks/rules-of-hooks': 'error',
        'react/self-closing-comp': 1,
        'react/jsx-closing-tag-location': 1,
        'no-unreachable': 1,
        'react-hooks/exhaustive-deps': 'warn',
        'no-unused-vars': 'off',
        'react/no-unescaped-entities': 'off',
        'react/react-in-jsx-scope': 'off',

    },
    //
    //
    //    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
};