FROM nginx

LABEL RUQUENTIN <ru.quentin@gmail.com>

RUN apt-get update \
  && apt-get install \
    -y build-essential libpng-dev \
    -y curl \
  && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
  && apt-get install -y nodejs \
    cowsay \
  && ln -s /usr/games/cowsay /usr/bin/cowsay

WORKDIR /usr/app

COPY . ./
COPY ./currency-converter.com.conf /etc/nginx/conf.d

RUN npm install
RUN npm run build -- --output-path=./build

EXPOSE 8080

CMD cowsay "Everything's ready, my Lord!" \
  && nginx -g 'daemon off;'

