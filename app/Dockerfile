FROM node:9.6.1 as builder
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build

FROM nginx:1.13.9-alpine
WORKDIR /usr/src/app
COPY ./dist /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]