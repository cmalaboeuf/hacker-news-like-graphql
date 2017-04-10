# hacker-news-like-graphql
## To run in prod mode with Docker
Build the React front project :
```bash
cd front && npm run build
```
You can use `docker-compose up` to  run an instance of graphql server
```bash
docker-compose -f docker-compose-prod.yml build && docker-compose -f docker-compose-prod.yml up -d
```
## To run in dev mode with Docker:
Start mongodb and graphql server
```bash
docker-compose build && docker-compose up -d
```

Start react front and liveReload
```bash
cd front && npm start
```

## Requirements

* [Node.js](http://nodejs.org/)
* [MongoDB](https://www.mongodb.org/)
* [npm] (https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)
* [Docker] (https://docs.docker.com/engine/installation/)
* [Docker compose] (https://docs.docker.com/compose/install/)
## License

The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
