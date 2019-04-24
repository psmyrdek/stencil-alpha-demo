#!/usr/bin/env bash

rm -rf docs
cp -R www docs
git add .
git commit -am "Updated docs"
git push -u origin master