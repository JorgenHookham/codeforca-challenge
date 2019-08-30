default: build

TSC=./node_modules/typescript/bin/tsc

install:
	npm i

build:
	$(TSC)

watch:
	$(TSC) --watch

clean:
	rm -rf ./build
