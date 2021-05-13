FROM node:alpine
WORKDIR probr
COPY . .
RUN npm ci

ENTRYPOINT ["node", "index.js", "cucumber"]