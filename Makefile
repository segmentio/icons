
BIN := node_modules/.bin
SRC := $(shell find src -type f -name "*.js")

COVERAGE_BRANCH_THRESHOLD := 73
COVERAGE_FUNCTION_THRESHOLD := 98
COVERAGE_LINE_THRESHOLD := 98
COVERAGE_STATEMENT_THRESHOLD := 98

lib: $(SRC) node_modules
	$(BIN)/babel --out-dir $@ src

clean:
	rm -rf components lib coverage

test: node_modules
	$(BIN)/mochify \
	  --phantomjs $(BIN)/phantomjs \
	  --reporter spec \
	  --transform babelify \
	    test/index.js

coverage: $(SRC) $(wildcard test/*.js) node_modules
	$(BIN)/mochify \
	  --phantomjs $(BIN)/phantomjs \
	  --reporter spec \
	  --transform babelify \
	  --plugin [ \
	    mochify-istanbul \
	      --exclude '**/node_modules/**' \
	      --exclude '**/test/**' \
	      --report text \
	      --report json \
	      --dir $@ \
	    ] \
	   test/index.js

check-coverage: coverage
	$(BIN)/istanbul check-coverage \
	  --branches $(COVERAGE_BRANCH_THRESHOLD) \
	  --functions $(COVERAGE_FUNCTION_THRESHOLD) \
	  --lines $(COVERAGE_LINE_THRESHOLD) \
	  --statements $(COVERAGE_STATEMENT_THRESHOLD)

check-build: lib node_modules
	$(BIN)/browserify lib/index.js > /dev/null
	$(BIN)/duo --stdout lib/index.js > /dev/null

node_modules:
	npm install
	touch $@

.PHONY: test clean check-build
