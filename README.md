# DevOps Demo Application

A modern containerized Node.js application with CI/CD pipeline.

## Prerequisites

- Docker
- Docker Compose (optional)

## Running with Docker

### Build the image
```bash
docker build -t devops-demo .
```

### Run the container
```bash
docker run -d -p 3000:3000 --name devops-demo devops-demo
```

### View logs
```bash
docker logs devops-demo
```

### Stop the container
```bash
docker stop devops-demo
```

### Remove the container
```bash
docker rm devops-demo
```

## Running with Docker Compose

### Start the application
```bash
docker-compose up -d
```

### View logs
```bash
docker-compose logs -f
```

### Stop the application
```bash
docker-compose down
```

### Rebuild and restart
```bash
docker-compose up -d --build
```

## Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## Tech Stack

- Node.js 18
- Express.js
- Docker
- GitHub Actions
