FROM node:20

WORKDIR /app

COPY package.json .
COPY tsconfig.json .

RUN npm i

COPY . .

EXPOSE 8000

CMD [ "npm", "run" ,"prod" ]