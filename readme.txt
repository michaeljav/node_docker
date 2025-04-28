
1.project setup
mkdir my-express-app
cd my-express-app
npm init -y
npm install express

npm install --save-dev nodemon


1.creta the .dockerignore
2.create dockerfile
3.-to create image from the dockerfile.  the dot is where the docker file is.
and the  hello_api_docker_example is the name of the image.
 -   docker build -t hello_api_docker_example .
 4.Running the container
-    docker run -p 9000:9000 hello_api_docker_example


5.compose
   is a file  tells your containers how work together to create the full 

6. volume
  is a folder in your computer that docker can access to save data  from our container and share that date with other containers

  7.run docker compose
  -   docker compose up

  7.shutdown docker compose
  -   docker compose down


8-when you  have modification in the image Rebuild your images:
1.-  docker-compose build

2.-  docker-compose up --build    :(--build forces a rebuild if needed.)
