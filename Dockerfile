# Utilizar la ultima imagen de node
FROM node:lts

# Crear directorio de trabajo
WORKDIR /app

# Copiar el contenido del proyecto a /app
COPY ./package*.json /app/
# Instalar dependencias
RUN npm install

COPY . /app/
# Exponer el puerto 90
EXPOSE 90

# Instalar aplicacion 
CMD ["node", "app.js"]