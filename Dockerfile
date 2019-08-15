FROM alpine:edge

RUN apk add --update crystal shards libc-dev openssl-dev zlib-dev

RUN mkdir /app
COPY . /app/
WORKDIR /app/
RUN shards
RUN crystal build  -o src/api src/api.cr 
ENTRYPOINT "src/api"
