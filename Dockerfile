#Uses node version 22 as our base image
FROM node:20

#Goes to the app directory( think of it  like a cd terminal command)

WORKDIR /app

#Copy package.json and package-lock.json (if available)
COPY package*.json  ./

#Install app dependencies.
#This run keyword  happens when we're building image but the CMD keyword
#is what docker uses to actual start  the container
# Install nodemon globally for development
# RUN npm install -g nodemon && npm install
RUN npm install
# RUN npm install --include=dev

#Copy the rest of our app into the container
COPY . .

# Change ownership of app files to node user
RUN chown -R node:node /app

# Switch to non-root user
USER node

#Set port environment variable
ENV PORT=9000
#Expose the port so our computer can access it
EXPOSE 9000

#Run the app
CMD [ "npm", "start" ]
