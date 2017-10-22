#!/bin/sh
cd ./app
rm -rf build
yarn build
rm -rf ../server/src/main/resources/public/*
cp -r build/* ../server/src/main/resources/public/
