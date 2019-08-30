default: build

SOURCE=./source/index.ts
TSC=./node_modules/typescript/bin/tsc

install:
	npm i

build: $(SOURCE)
	$(TSC)

watch: $(SOURCE)
	$(TSC) --watch

clean:
	rm -rf ./build
