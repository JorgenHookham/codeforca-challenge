default: deploy

SOURCE=./source/index.ts
TSC=./node_modules/typescript/bin/tsc

install:
	npm i

build: $(SOURCE)
	$(TSC)

run:
	node .

clean:
	rm -rf ./build
	rm hashed-data.json
	rm -rf node_modules

deploy:
	$(MAKE) install
	$(MAKE) build
	$(MAKE) run
