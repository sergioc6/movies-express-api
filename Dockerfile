FROM node:12.18.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
COPY .env.example .env 

EXPOSE 3000
CMD [ "npm", "run", "devserver" ] 