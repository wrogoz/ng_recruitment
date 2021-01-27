FROM node:14.15-alpine
RUN npm install nodemon -g
WORKDIR /usr/src/app
RUN apk update && apk add bash
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3257

CMD ["nodemon","app.js"]