# Gustavo Morais

```
npm init
npm install express
npm i mongodb mongoose
npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0
npm i body-parser nodemon
```
After thoes commands you should change your package.json file
changing the scripts test to scripts start and put the following content.

```
nodemon ./index.js --exec babel-node -e js
```

After that you have to build the index.js and the .babelrc file.