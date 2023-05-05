# syntax=docker/dockerfile:1

FROM node:18.16.0-alpine
WORKDIR /
COPY . .
RUN npm install --production
CMD ["node", "server.js"]
EXPOSE 3000
