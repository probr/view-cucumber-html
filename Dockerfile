FROM node:alpine
WORKDIR probr
COPY . .
RUN npm ci

ARG PROBR_VERSION=

ENTRYPOINT node parse.js cucumber $PROBR_VERSION