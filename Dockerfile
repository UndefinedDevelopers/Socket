FROM node:lts
RUN mkdir -p /socket-bot
WORKDIR /socket-bot
COPY package.json /socket-bot
COPY . /socket-bot
CMD ["npm", "start"]