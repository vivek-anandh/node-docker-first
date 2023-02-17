# node-docker-first


Docker commands - to build with a latest tag
next time you build, the last latest tag will become orphan
** docker build --tag node-docker-first:0.0.1 . **

in case we need to keep a copy of latest, then tag
** docker tag node-docker-first:latest node-docker-first:0.0.1 **


or combine both in single command
** docker build --tag node-docker-first:0.0.1 . **


RUN Docker with detached mode and port (publish) mapping
** docker run -d -p 8080:8080 node-docker-first:0.0.1 **
