FROM node:21-alpine

WORKDIR /express

RUN npm install pm2@5.3.1 -g

EXPOSE 3000

COPY package*.json ./
RUN npm ci

COPY process.json process.json 
COPY dist/ src/


CMD [ "pm2-runtime", "start", "process.json"]