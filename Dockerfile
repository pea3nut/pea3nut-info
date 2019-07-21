FROM nginx
MAINTAINER pea3nut "626954412@qq.com"

COPY ./dist/ /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/*
COPY ./vhost.nginx.conf /etc/nginx/conf.d/pea3nut-info.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
