# BASE STAGE
FROM node:21-alpine as base
WORKDIR /express

# BUILD STAGE
FROM base as build

RUN npm install pm2@5.3.1 -g
COPY --link . .
RUN npm ci
RUN npm run build

RUN npm prune --omit=dev

# RUNNER STAGE
FROM base

COPY --from=build /express/dist/ /express/src/
COPY --from=build /express/package*.json /express/
COPY --from=build /express/process.json /express/process.json 

CMD [ "pm2-runtime", "start", "process.json"]