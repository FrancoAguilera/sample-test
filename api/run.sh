#!/bin/sh
set -e
DIR=$(dirname "$(readlink -f "$0")")
cd $DIR
. ./.env

port=$BACKEND_PORT

[ -n "$(lsof -t -i :${port})" ] && kill $(lsof -t -i :$port)
npm i
npm run start
