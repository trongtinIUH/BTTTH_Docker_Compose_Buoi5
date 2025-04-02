# Multi-Tier Voting Application

This project is a multi-tier voting application consisting of a Python frontend, a Node.js backend, a Redis service for temporary vote storage, a Java worker for processing votes, and a PostgreSQL database for storing results.

## Architecture Overview

- **Frontend**: A Python application running on port 5000 that provides a web interface for users to cast their votes.
- **Backend**: A Node.js application running on port 5001 that handles requests for voting results and communicates with the Redis service.
- **Redis**: A temporary storage solution for votes, allowing for quick access and processing.
- **Worker**: A Java application that processes votes from Redis and stores the results in a PostgreSQL database.
- **Database**: A PostgreSQL database that permanently stores the voting results.

## Getting Started

### Prerequisites

- Python 3.x
- Node.js
- Redis
- Java 8 or higher
- PostgreSQL

### Installation

1. **Frontend**:
   - Navigate to the `frontend` directory.
   - Install dependencies using `pip install -r requirements.txt`.
   - Run the application with `python app.py`.

2. **Backend**:
   - Navigate to the `backend` directory.
   - Install dependencies using `npm install`.
   - Start the server with `node src/app.js`.

3. **Redis**:
   - Follow the Redis installation instructions for your operating system.

4. **Worker**:
   - Navigate to the `worker` directory.
   - Build the project using Maven with `mvn clean install`.
   - Run the worker application.

5. **Database**:
   - Set up PostgreSQL and create a database.
   - Run the SQL commands in `init.sql` to initialize the database.

## Usage

- Access the frontend at `http://localhost:5000` to cast your votes.
- The backend will handle the results and communicate with Redis and the database.
- The worker will process votes and store them in the PostgreSQL database.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.