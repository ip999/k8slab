# Dockerfile for node app
# using node:alpine

FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8080

CMD ["node", "app.js"]