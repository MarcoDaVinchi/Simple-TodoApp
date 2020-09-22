FROM node:14.7.0 as builder

WORKDIR /app

COPY package*.json /app/

COPY yarn*.lock /app/

RUN yarn install

COPY . /app/

RUN yarn build


FROM node:14.7.0

COPY --from=builder /app/dist /home/node/app

COPY package*.json /app/

COPY yarn*.lock /app/

RUN yarn install

ENV NODE_ENV=production

WORKDIR /home/node/app

EXPOSE 3000

CMD [ "node", "/home/node/app/dist/main" ]
