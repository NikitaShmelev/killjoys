FROM node:16-alpine

WORKDIR /app/frontend/

COPY package*.json /app/frontend/
RUN npm install

COPY . /app/frontend/
ENV PATH /app/frontend/node_modules/.bin:$PATH
# Install dependencies
COPY package*.json ./
RUN npm install
RUN npm install react-bootstrap bootstrap
RUN npm install jquery --save
# RUN npm install --save react-bootstrap bootstrap@3

# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true