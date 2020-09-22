FROM node:14.7.0

WORKDIR /app

COPY package*.json /app/

COPY yarn*.lock /app/

RUN yarn install

COPY . /app/

RUN yarn build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "start:prod"]
