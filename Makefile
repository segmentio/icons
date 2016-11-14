SVGS := $(wildcard svgs/*.svg)

build: $(SVGS) node_modules
	node_modules/.bin/babel-node build.js
	touch $@

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf build

.PHONY: clean
