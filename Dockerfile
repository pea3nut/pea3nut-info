FROM nginx
MAINTAINER pea3nut "626954412@qq.com"

COPY ./dist/ /usr/share/nginx/html/

EXPOSE 80
 
ENTRYPOINT ["nginx","-g","daemon off;"]
