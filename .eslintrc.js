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
	'settings': {
		'react': {
			'pragma': 'React',
			'version': 'detect'
		},
	},
	'parser': '@babel/eslint-parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
		'babelOptions': {
			'plugins': [
				'@babel/plugin-syntax-class-properties'
			]
		}
	},
	'plugins': [
		'@babel',
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
		],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
	}
};
