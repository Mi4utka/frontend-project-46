lint:
	npx eslint .
install: 
	npm ci
publish:
	npm publish --dry-run
lintfix:
	npx eslint --fix .
test-coverage:   	
	npm test -- --coverage --coverageProvider=v8