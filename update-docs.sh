#!/usr/bin/env bash

rm -rf docs
npm run build
cp -R www docs
git add .
git commit -am "Updated docs"
git push -u origin master