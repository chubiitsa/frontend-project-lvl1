install:
	npm install

installCI:
	npm ci

start: 
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run

