FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Instalar dependencias INCLUYENDO nodemon
RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]