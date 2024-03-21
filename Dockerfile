FROM node:20-apline
FROM ngingx:1.25

WORKDIR /home/app

COPY ./src .

RUN apt-get update && apt-get install -y nano
RUN npm install -g npm@latest
RUN npm run build

EXPOSE ${PORT}

LABEL authors="ThreeFaceSoft"

ENTRYPOINT ["top", "-b"]