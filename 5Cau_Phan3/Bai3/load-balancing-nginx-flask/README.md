# Load Balancing with Nginx and Flask

This project demonstrates how to set up load balancing between two Flask application instances using Nginx as a reverse proxy. The setup utilizes Docker to containerize the applications and Nginx.

## Project Structure

```
load-balancing-nginx-flask
├── flask-app-1
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── flask-app-2
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── nginx
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## Requirements

- Docker
- Docker Compose

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd load-balancing-nginx-flask
   ```

2. **Build and run the services**:
   ```
   docker-compose up --build
   ```

3. **Access the application**:
   Open your web browser and navigate to `http://localhost:8080`. Nginx will route your requests to one of the two Flask instances in a round-robin manner.

## Usage

- The Flask applications are set up to respond to requests at the root endpoint (`/`). You can modify the `app.py` files in each Flask application directory to change the response behavior.
- The Nginx configuration can be found in the `nginx/nginx.conf` file, where you can adjust load balancing settings if needed.

## Notes

- Ensure that Docker and Docker Compose are installed on your machine before running the setup.
- You can scale the Flask services by modifying the `docker-compose.yml` file if needed.