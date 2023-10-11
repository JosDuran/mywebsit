# Usa una imagen base de Node.js
FROM node:18.16.0

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu proyecto al directorio de trabajo
COPY . .

# Instala las dependencias
RUN npm install

# Instalar DaisyUI y Tailwind CSS
RUN npm install daisyui tailwindcss

# Inicializar la configuración de Tailwind CSS y DaisyUI
RUN npx tailwindcss init -p

# Construye la aplicación
RUN npm run build

# Exponer el puerto 3000 en el que se ejecutará la aplicación internamente en el contenedor
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "run", "dev"]
