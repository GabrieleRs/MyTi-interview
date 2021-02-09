FROM node:13.10-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
EXPOSE 3000
COPY . .
CMD npm start