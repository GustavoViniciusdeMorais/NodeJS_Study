# MongoDB

Created by Gustavo Morais

### Install MongoDB and mongosh
```sh
 #!/bin/bash
apt-get update
apt-get install gnupg curl
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt-get update
apt-get install -y mongodb-org
systemctl start mongod
systemctl status mongod
curl -sLO https://downloads.mongodb.com/compass/mongodb-mongosh_2.0.2_amd64.deb && dpkg -i mongodb-mongosh_2.0.2_amd64.deb
```

### Use mongosh
```sh
mongosh
use vikiport
db.movies.insertOne({title: "Star Wars III", genres:["action", "SCI"], rutime: 180, year: 2006})
db.movies.find()
```