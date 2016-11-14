SVGS := $(wildcard svgs/*.svg)
TEMPLATES := $(wildcard templates/*.js)

build: $(SVGS) $(TEMPLATES) node_modules
	node_modules/.bin/babel-node build.js
	touch $@

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf build

.PHONY: clean
