FROM node:lts
RUN mkdir -p /socket-bot
WORKDIR /socket-bot
COPY package.json /socket-bot
RUN npm install
COPY . /socket-bot
CMD ["node", "index.js"]