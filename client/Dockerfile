FROM node:14.7.0 as builder

WORKDIR /app

COPY . /app/

RUN npm install -g @angular/cli

RUN npm install

RUN ng build --prod --output-path dist

FROM nginx:1.19.1

COPY nginx.conf /etc/nginx/
COPY ./ssl/ /etc/nginx/ssl
COPY default.conf /etc/nginx/conf.d/


COPY --from=builder /app/dist/ /usr/share/nginx/html

EXPOSE 80 443
