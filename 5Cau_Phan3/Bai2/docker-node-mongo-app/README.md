# Docker Node Mongo App

This project is a simple Node.js application that implements a REST API for storing data in MongoDB. It uses Docker to containerize the application and MongoDB for data persistence.

## Project Structure

```
docker-node-mongo-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes
│   │   └── index.js         # Defines API routes
│   ├── models
│   │   └── dataModel.js      # Mongoose schema and model
│   └── controllers
│       └── dataController.js  # Logic for handling API requests
├── Dockerfile                # Dockerfile for building the Node.js image
├── docker-compose.yml        # Docker Compose configuration
├── package.json              # npm configuration and dependencies
├── package-lock.json         # Locks the versions of dependencies
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd docker-node-mongo-app
   ```

2. Build and run the application using Docker Compose:

   ```
   docker-compose up --build
   ```

### Usage

Once the application is running, you can access the REST API at `http://localhost:3000`. The following endpoints are available:

- `GET /data` - Retrieve all data
- `POST /data` - Create new data
- `PUT /data/:id` - Update data by ID
- `DELETE /data/:id` - Delete data by ID

### Stopping the Application

To stop the application, press `CTRL+C` in the terminal where Docker Compose is running. You can also run:

```
docker-compose down
```

### License

This project is licensed under the MIT License.