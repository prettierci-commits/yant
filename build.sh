#!/usr/bin/env sh

root_dir=$(dirname "$0")

echo
echo '==> Newtab'
echo

cd "$root_dir/src/newtab"
npm run build

echo
echo '==> Demo'
echo

cd "$root_dir"
rsync -r "./ext/src/newtab/" "./demo"

echo
echo '==> Done'
echo

