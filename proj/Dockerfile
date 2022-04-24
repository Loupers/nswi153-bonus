FROM node:14.9

WORKDIR /tmp/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install 

COPY . ./

EXPOSE 8090

CMD ["npm", "start"]
