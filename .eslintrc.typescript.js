module.exports = {
	files: ['*.ts', '*.tsx'],
	plugins: ['@typescript-eslint', 'react', 'jest', 'unused-imports'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	env: {
		jest: true,
	},
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
	rules: {
		// Disable Eslint rules that conflict to Prettier
		semi: 'off',
		'max-len': 'off',
		'no-tabs': 'off',
		'comma-dangle': 'off',
		indent: 'off',

		'no-unused-vars': 'off', // used '@typescript-eslint/no-unused-vars' instead
		'dot-notation': [0], // must do because of immutable migration
		'space-before-function-paren': [0],
		'no-underscore-dangle': [0], // _ before action name in actions.js
		'no-param-reassign': [0], // eg. function(a) { a = 12 }
		'global-require': [0], // eg. Unexpected require() in src/modules/th.js
		'no-confusing-arrow': [0],
		'no-shadow': [0],
		'consistent-return': [0], // must return at the end of arrow function
		'prefer-destructuring': [0],
		'no-use-before-define': [0], // define function after function that use it
		'no-return-assign': [0], // Arrow function should not return assignment eg. cant do this -> ref={el => (this.picture = el)}
		'no-console': [2],
		'object-shorthand': [0], // Expected method shorthand
		'func-names': [0], // functions must have a name
		'no-restricted-properties': [1], // Math.pow -> exponentiation operator (**) instead
		'no-plusplus': [0], // eg. i++ or i--
		'no-mixed-operators': [0], // eg. ( a + b / c)
		'class-methods-use-this': [0], // Expected 'this' to be used by class method 'selector'
		'default-case': [0], // switch must have default case
		'no-lone-blocks': [0], // Block is redundant eg. { } in switch case
		'no-unused-expressions': [0],
		'no-restricted-globals': [0],
		'no-restricted-syntax': [0],
		'function-paren-newline': [0], // Unexpected newline after '(' or before ')' of function -> maybe conflict with prettier
		'arrow-parens': [0],
		'one-var': [0], // Split 'const' declarations into multiple statements
		'prefer-promise-reject-errors': [0], // Expected the Promise rejection reason to be an Error eg. in ApiManager.js
		'no-sequences': [0],
		'no-nested-ternary': [0], // Nesting ternary expressions can make code more difficult to understand
		'array-callback-return': [0], // enforces usage of return statement in callbacks of array’s methods.
		'no-empty-function': [0],
		'no-continue': [0], // no continue in if
		'guard-for-in': [0], // need Object.prototype.hasOwnProperty.call() in for in of obj
		'no-new': [0],
		'no-buffer-constructor': [0], // Use the producer methods Buffer.from, Buffer.alloc, and Buffer.allocUnsafe instead
		'no-proto': [0], // no __proto__ -> Use getPrototypeOf method instead
		'no-new-func': [0], // no new Function()
		'operator-assignment': [0], // Assignment can be replaced with operator assignment & failed after git commit
		'object-curly-newline': [0], // can fix with --fix but faild after git push
		'quote-props': [0], // can fix with --fix but conflict with flow "on-string literal property keys not supported"
		'no-alert': [0], // allow alert(), confirm(), prompt()
		'no-mixed-spaces-and-tabs': [0],
		'wrap-iife': [0],
		'semi-style': [0],
		'no-extra-semi': [0],
		'generator-star-spacing': [0],
		'prefer-arrow-callback': [0],
		'arrow-body-style': [0],
		'no-lonely-if': 'off',
		'no-else-return': 'off',
		'operator-linebreak': [0],
		'implicit-arrow-linebreak': [0],

		// typescript
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-misused-promises': 'off', // drain performance
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/no-unused-expressions': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
		'@typescript-eslint/require-await': 'off',

		// react
		'react/prop-types': [0], // fiexd by flow
		'react/require-default-props': [0], // fiexd by flow
		'react/forbid-prop-types': [0], // fiexd by flow
		'react/default-props-match-prop-types': [0], // fiexd by flow
		'react/prefer-stateless-function': [1],
		'react/jsx-no-target-blank': [1], // no target='_blank' in <a> element
		'react/jsx-no-bind': [1], // no bind() in JSX prop -> it will create new function
		'react/no-redundant-should-component-update': [0], // if have shouldComponentUpdate defined in component that extends React.PureComponent but it works with React.Component
		'react/no-did-mount-set-state': [1], // Do not use setState in componentDidMount
		'react/no-did-update-set-state': [1], // Do not use setState in componentDidMount
		'react/no-multi-comp': [0], // Declare only one React component per file
		'react/no-unescaped-entities': [1], // text in html element eg. -> <span className={s.spanText}>OWNER'S MESSAGE</span>
		'react/no-array-index-key': [0], // cannot use key={index of array}
		'react/jsx-key': [2], // requires key prop for react element in a collection
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/jsx-indent': [0, 'tab'], // after git commit it failed
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-closing-tag-location': [0], // can fix by --fix but after git commit it failed
		'react/no-unused-state': [1],
		'react/no-unused-prop-types': [1],
		'react/sort-comp': [
			2,
			{
				order: [
					'static-variables',
					'static-methods',
					'state',
					'instance-variables',
					'/.*(formState|FormState).*/',
					'init',
					'lifecycle',
					'/^build.+$/',
					'/^on.+$/',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'everything-else',
					'/^render.+$/',
					'render',
				],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-curly-brace-presence': 'off',
		'react/jsx-wrap-multilines': [0],
		'react/no-danger': 'off',
		'react/jsx-boolean-value': 'off',

		// import
		'import/no-duplicates': [0], // drain performance
		'import/no-extraneous-dependencies': [0], // Forbid the import of external modules that are not declared in the package.json's dependencies, devDependencies, optionalDependencies or peerDependencies.
		'import/no-unresolved': [0],
		'import/extensions': [0],
		'import/prefer-default-export': [0],
		'import/first': [0], // imports that come after non-import statements.
		'import/no-mutable-exports': [0], // Forbids the use of mutable exports with var or let
		'import/no-dynamic-require': [0],
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
					{
						pattern: 'core/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: 'common/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: 'modules/**',
						group: 'internal',
						position: 'after',
					},
				],
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				pathGroupsExcludedImportTypes: ['react'],
			},
		],

		// jsx-a11y
		'jsx-a11y/anchor-is-valid': [0], // <a tag if has onClick -> <button
		'jsx-a11y/click-events-have-key-events': [0], // if has onClick must have at least onKeyUp, onKeyDown, onKeyPress
		'jsx-a11y/no-static-element-interactions': [0], // HTML elements with event handlers require a role={}
		'jsx-a11y/alt-text': [0],
		'jsx-a11y/anchor-has-content': [0], // fail if <a><TextWrapper aria-hidden /></a>
		'jsx-a11y/iframe-has-title': [1], // <iframe> elements must have a unique title property
		'jsx-a11y/no-noninteractive-element-interactions': [0],
		'jsx-a11y/label-has-associated-control': [1],
		'jsx-a11y/label-has-for': [0], // This rule was deprecated in v6.1.0. It will no longer be maintained. Use label-has-associated-control instead.
		'jsx-a11y/no-autofocus': [0],
	},
}
