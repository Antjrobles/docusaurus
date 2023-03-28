---
sidebar_position: 7
title: "DOCKER"
description: 'My Docker Notes'
type: application
created: 04-03-2022
---

# DOCKER 

##  LINKS TO COURSES AND TUTORIALS
- [ Docker Containers and Kubernetes Fundamentals – Full Hands-On Course (FreeCodeCamp)](https://www.youtube.com/watch?v=kTp5xUtcalw&t=3356s)
***
## <u>DOCKER COMMANDS</u>

- `docker info` - dispplay system information
- `docker version` - display the system version
- `docker login` - log in to a Docker registry
- `docker pull [imageName]` -  pull an image from a registry
- `docker run [imageName]` - run container
- `docker run -d` - run container in detached mode
- `docker start [containerName]` - start stopped container
- `docker ps` -  list running containers
- `docker ps -a` - list running and stooped containers
- `docker stop [containerName]` - stop container
- `docker kill [containerName]` - kill container
- `docker image inspect [imageName]` - get image info
***
## <u>SPECIFY LIMITS</u>
- `docker run --memory="256m" nginx` - max memory the container can use
- `docker run --cpus=".5" nginx` - max CPUs to use
***
## <u>DOCKER VARIABLES</u>
- `--name [given_name]` - name given to the container
- `--publish 80:80` - ports to map. outside the container and inside the container
***

## <u>ATTACH A SHELL</u>
- `docker run -it nginx -- /bin/bash` - attach a shell
- `docker run  -it -- microsoft/powershell:nanosever pwsh.exe` - attach a powershell (Windows)
- `docker container exec -it [containerName] -- bash` - attach to a running container
***
## <u>CLEANING UP</u>
- `docker rm [containerName]` - remove stopped containers
- `docker rm $(docker ps -a -q)` - remove all stopped containers
- `docker images` - list images
- `docker rmi [imageName]` - delete image
- `docker system prune -a` - removes all images not use by any container 
***
## <u>DOCKERFILE</u>
- `docker build -t [name:tag]` - builds an image using a `Dockerfile` located in the same folder
- `docker build -t [name:tag] -f [fileName]` - builds an image using a `Dockerfile` in a different folder 
- `docker tag [imageName] [name:tag]` - tag an existing image
- Dockerfile sample:
```dockerfile
FROM alpine

RUN apk add -update nodejs nodejs-npm

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 8000

ENTRYPOINT ["node", "./app.js"]
```

