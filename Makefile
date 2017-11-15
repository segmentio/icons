SVGS := $(wildcard svgs/*.svg)
TEMPLATES := $(wildcard templates/*.js)

build: $(SVGS) $(TEMPLATES) node_modules
	BABEL_ENV=commonjs node_modules/.bin/babel-node build.js
	BABEL_ENV=es node_modules/.bin/babel-node build.js
	touch $@

node_modules: package.json package-lock.json
	npm install
	touch $@

clean:
	rm -rf build

test: node_modules build
	node_modules/.bin/ava test/index.js

.PHONY: clean test
