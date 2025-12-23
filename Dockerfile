# Utilise Nginx Alpine (léger et performant)
FROM nginx:alpine

# Copie les fichiers du projet dans le dossier de Nginx
COPY . /usr/share/nginx/html

# Configure Nginx pour les modules ES6
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose le port 80
EXPOSE 80

# Nginx démarre automatiquement
CMD ["nginx", "-g", "daemon off;"]
