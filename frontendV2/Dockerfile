#Getting th ebase image from the docker registry as latest version.
FROM node:latest

#Then setting up the working directory for the container.
WORKDIR /app

#Copying all the project files into the container as image.
COPY . .

#Installing project dependencies.
RUN npm install

#Reinstalling angular cli so that, can ensure its installed.
RUN npm install -g @angular/cli

#Exposing the required ports to internet, so that we can access project from browser with the managed IP.
EXPOSE 80 4200

#Setting up the entry pooint for the container.
CMD ng serve --host 0.0.0.0
