FROM node:12

ARG ECOSIS_VERSION

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY client/public/package.json client/public/package.json
COPY client/dist client/dist
COPY controllers controllers
COPY models models
COPY lib lib
COPY index.js .

CMD node index.js