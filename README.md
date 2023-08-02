## Description

A Nest.js GraphQL API sample that uses Apollo Gateway and Federation. Furthermore, It is a mono-repo project with 3 services and one gateway to manage incoming requests.

## Requirements

You must have [Docker](https://www.docker.com/) installed on your machine.

*Note: if you're using old version of Docker and it doesn't have an installed Compose Module, Please install **Docker Compose** too.*

## Running

Execute the following command to run the projects:

```bash
# New Docker versions
docker compose up -d --build

# Old Docker versions
docker-compose up -d --build
```

Now, You can access to the project API via [http://localhost:3000](http://localhost:3000). All services didn't run on production mode so, You can access to playground also.

## License

GraphQL-federation is [MIT licensed](LICENSE).
