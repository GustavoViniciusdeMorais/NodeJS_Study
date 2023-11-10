# Gustavo Morais

```
sudo docker-compose up -d --build // start containers
sudo docker exec -it [CONTAINER NAME] sh // access the node container
npm init
npm install express
npm i mongodb mongoose
npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0
npm i body-parser nodemon
npm start
sudo docker-compose down // stops all containers
```
After thoes commands you should change your package.json file
changing the scripts test to scripts start and put the following content.

```
nodemon ./index.js --exec babel-node -e js
```

After that you have to build the index.js and the .babelrc file.

Edit the file node_modules/whatwg-url/lib/encoding.js in your project
putting those following lines on top

```
"use strict";
var util= require('util');
const utf8Encoder = new util.TextEncoder();
const utf8Decoder = new util.TextDecoder("utf-8", { ignoreBOM: true });
```
Instead of those lines:
```
"use strict";
const utf8Encoder = new TextEncoder();
const utf8Decoder = new TextDecoder("utf-8", { ignoreBOM: true });
```

See the mongo docker IP do configurate at mongoose connection

```
sudo docker inspect [CONTAINER ID] | grep IP
```
### Install node at linux alpine
```sh
apk add --update nodejs
apk add --update npm
npm install
npm run build
```
