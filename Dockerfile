FROM node

WORKDIR /app

COPY . /app

RUN yarn install
RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]