FROM nginx:latest

COPY nginx.conf /etc/nginx/
COPY ./ssl/ /etc/nginx/ssl
COPY default.conf /etc/nginx/conf.d/


COPY ./dist/index.html /usr/share/nginx/html

EXPOSE 80 443