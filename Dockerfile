# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al contenedor
#COPY . .

# Exponer el puerto en el que se ejecuta la aplicación (opcional)
EXPOSE 3000

# Iniciar la aplicación usando el comando npm start
CMD ["npm", "start"]