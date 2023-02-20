FROM node:lts-alpine3.16
USER root
WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN chown -R node:node /app/node_modules
EXPOSE 3005

#CMD ["ng","serve","--host", "0.0.0.0","--port","4200"]
