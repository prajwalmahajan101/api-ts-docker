FROM node:20

WORKDIR /app

COPY /app/package.json .
COPY /app/tsconfig.json .

RUN npm i

COPY /app/src /src

EXPOSE 8000

CMD [ "npm", "run" ,"prod" ]
