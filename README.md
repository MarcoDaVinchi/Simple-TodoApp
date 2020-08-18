# Simple-TodoApp

Simple TodoApp project.
Made for educational and Proof of Knowledge purposes.

## To start app

- Git clone project to your local pc/server/whatever.
- Run start.sh script if you need to preconfigure your host env.
- Add your certificates to the `client\ssl` folder for HTTPS or modify client\default.conf for HTTP.
- `docker-compose build --no-cache` to create image of the project.
- And finally serve it via `docker-compose config | docker stack deploy -c - APPNAMEHERE` if you want to use docker swarm or `docker-compose up -d` for compose.

## TBD section

- Nest.JS backend container.
- PGSql database container for users.
- Continue to customize the Angular frontend part ( mobile, adaptive and so on..).
