FROM node:14.7.0 as builder

WORKDIR /app

RUN npm install -g @angular/cli

COPY . /app/

RUN yarn install

RUN ng build --prod


FROM nginx:1.19.1

COPY nginx.conf /etc/nginx/
COPY ./ssl/ /etc/nginx/ssl
COPY default.conf /etc/nginx/conf.d/


COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 80 443