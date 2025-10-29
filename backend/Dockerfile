FROM node:16-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --only=production

# Copiar código fuente
COPY src/ ./src/

# Exponer puerto
EXPOSE 5000

# Comando para ejecutar
CMD ["npm", "start"]