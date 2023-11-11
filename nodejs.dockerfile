FROM gustavovinicius/nodejs:v20

EXPOSE 8080

WORKDIR /var/www/html

ENTRYPOINT ["tail", "-f", "/dev/null"]