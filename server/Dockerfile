FROM node:14.7.0 as builder

WORKDIR /app

COPY . /app/

RUN yarn install

RUN yarn build


FROM node:14.7.0

ENV NODE_ENV=production

COPY --from=builder /app/dist /app/dist

COPY package*.json /app/

COPY yarn*.lock /app/

COPY .yarnrc /app/

COPY ./.yarn/ /app/.yarn/

WORKDIR /app

RUN yarn install --prod

EXPOSE 3000

CMD [ "yarn", "start:prod" ]
