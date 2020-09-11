module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		'jquery': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab',
			{ 'MemberExpression': 'off' },
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'arrow-parens': [
			'error',
			'always'
		],
		'space-in-parens': [
			'error',
			'always'
		]
	}
};
