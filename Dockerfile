FROM node:20-alpine

RUN apk --no-cache add curl

WORKDIR /src

COPY . /src

RUN npm install && npm run build

RUN npm i -g serve

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]