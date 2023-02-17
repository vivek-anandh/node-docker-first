# syntax=docker/dockerfile:1

FROM node:18.4.0-alpine

ENV NODE_ENV=dev-config
ENV NODE_CONFIG_DIR=./src/config

WORKDIR /app

COPY ["package.json", "package-lock.json*", "src", "./"]

RUN npm i

COPY . .

CMD [ "npm", "start" ]