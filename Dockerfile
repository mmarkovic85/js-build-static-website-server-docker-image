# syntax=docker/dockerfile:1

FROM node:18.16.0-alpine
WORKDIR /
COPY . .
RUN npm install --omit=dev
CMD ["node", "server.js"]
EXPOSE 3000
