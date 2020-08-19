FROM node:14.7.0 as builder

WORKDIR /app

COPY package*.json /app/

COPY yarn*.lock /app/

RUN yarn install

COPY . /app/

RUN yarn build --prod --output-path=dist

FROM nginx:1.19.1

COPY nginx.conf /etc/nginx/
COPY ./ssl/ /etc/nginx/ssl
COPY default.conf /etc/nginx/conf.d/


COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 80 443
