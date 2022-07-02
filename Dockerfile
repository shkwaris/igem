FROM node:16.15-alpine3.16

RUN mkdir /patras_medicine
WORKDIR /patras_medicine

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]