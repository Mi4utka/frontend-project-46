lint:
	npx eslint .
install: 
	npm ci
publish:
	npm publish --dry-run
lintfix:
	npx eslint . --fix