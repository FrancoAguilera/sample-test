#!/bin/sh
set -e
DIR=$(dirname "$(readlink -f "$0")")
cd $DIR
. ./.env


docker ps -q -f name=$DB_CONTAINER_NAME 2>&1 \
    && echo "[db] stop existing container..." \
    && docker stop $DB_CONTAINER_NAME > /dev/null 2>&1 \
    && docker rm $DB_CONTAINER_NAME > /dev/null 2>&1

# kill any proccess running on DB port
[ -n "$(lsof -t -i :${DB_PORT})" ] && kill $(lsof -t -i :$DB_PORT)

# Run the PostgreSQL container
docker run -d \
  --name $DB_CONTAINER_NAME \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=$DB_CONTAINER_NAME \
  -p $DB_PORT:5432 \
  -v $(pwd)/init.sql:/docker-entrypoint-initdb.d/init.sql \
  postgres:latest

# Print connection details
echo "PostgreSQL container is running!"
echo "Connection URL: $DB_URL"
