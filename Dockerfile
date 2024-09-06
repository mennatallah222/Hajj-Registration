# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

#copy the files to install dependencies
COPY package*.json ./

#install them
RUN npm install

#copy the rest of the application code to the working dir
COPY . .

#build the app for production
RUN npm run build

#serve the app using Nginx server
FROM nginx:alpine

#copy the build files from the previous stage to the nginx dir
COPY --from=build /app/build /usr/share/nginx/html

#exposing the port that nginx will run on
EXPOSE 80

#start nginx
CMD [ "nginx", "-g", "daemon off;" ]