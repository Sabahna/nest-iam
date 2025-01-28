# Commands
.PHONY: run
run: 
	yarn prisma generate --schema prisma/schema.prisma && yarn prisma generate --schema prisma/schema2.prisma

.PHONY: build
build:
	yarn run build