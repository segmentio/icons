
NODE_ENV ?= development

BIN := node_modules/.bin
SRC := $(shell find lib -type f -name "*.js")

BROWSERIFY_TRANSFORM := --transform babelify
BROWSERIFY_FLAGS := $(BROWSERIFY_TRANSFORM) -d

DUO_FLAGS := --development

clean:
	rm -rf components build

build/browserify.js: index.js $(SRC) build node_modules
	$(BIN)/browserify $(BROWSERIFY_FLAGS) $< > $@

build/duo.js: index.js $(SRC) build node_modules
	$(BIN)/duo $(DUO_FLAGS) $< > $@

node_modules:
	npm install
	@touch $@

build:
	mkdir -p $@

.PHONY: clean
