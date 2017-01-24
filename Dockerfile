FROM node:6

ENV HOME /app
WORKDIR $HOME

RUN npm install --silent --global eslint mocha babel-eslint

COPY ./package.json ./
RUN npm install --silent

COPY . ./

CMD [ "npm", "test" ]
