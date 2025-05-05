#!/bin/bash

log(){
  echo "*** $@ ***"
}

log 'Adding astro integrations...'

bunx astro add --yes tailwind react partytown sitemap
bun install --save-dev --save-exact prettier prettier-plugin-astro