FROM node:16-alpine

WORKDIR /app/frontend/

COPY package*.json /app/frontend/
RUN npm install

COPY . /app/frontend/
ENV PATH /app/frontend/node_modules/.bin:$PATH
# Install dependencies
RUN npm install
# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true