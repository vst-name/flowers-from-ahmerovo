.PHONY: all help prettier

all: help

help:
	echo "Prettier"

prettier:
	bunx --bun prettier . --write

dev:
	bunx --bun astro dev --port 3000 --force

update:
	bun update

build:
	bunx --bun astro build

clean:
	rm -rf ./dist

shad-add:
	bunx --bun shadcn@latest add "$(add)"