
NODE_ENV ?= development

BIN := node_modules/.bin
SRC := $(shell find lib -type f -name "*.js")

BROWSERIFY_TRANSFORM := --transform babelify
BROWSERIFY_FLAGS := $(BROWSERIFY_TRANSFORM)

# in dev, build with sourcemaps and stuff
ifeq ($(NODE_ENV),development)
	BROWSERIFY_FLAGS += -d
endif

.DEFAULT_GOAL := build/bundle.js

clean:
	rm -rf components build

build/bundle.js: index.js $(SRC) build node_modules
	$(BIN)/browserify $(BROWSERIFY_FLAGS) $< > $@

node_modules:
	npm install
	@touch $@

build:
	mkdir -p $@

.PHONY: clean
