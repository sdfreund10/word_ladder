FROM alpine:edge

RUN apk add --update crystal shards libc-dev openssl-dev zlib-dev yarn

RUN mkdir /app
COPY . /app/
WORKDIR /app/
RUN shards && crystal build  -o src/api src/api.cr
RUN yarn install && yarn build --config webpack.config.js
ENTRYPOINT "src/api"
