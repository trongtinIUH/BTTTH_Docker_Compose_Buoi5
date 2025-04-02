# Voting Worker Service

This directory contains the Java worker application responsible for processing votes from the Redis service and storing the results in the PostgreSQL database.

## Overview

The worker retrieves votes stored in Redis, processes them, and then saves the results into the PostgreSQL database. This service is crucial for ensuring that the voting results are accurately recorded and maintained.

## Setup Instructions

1. **Prerequisites**: Ensure you have Java Development Kit (JDK) and Maven installed on your machine.

2. **Clone the Repository**: If you haven't already, clone the voting application repository.

3. **Navigate to the Worker Directory**:
   ```
   cd voting-app/worker
   ```

4. **Build the Project**: Use Maven to build the project:
   ```
   mvn clean install
   ```

5. **Configuration**: Update the configuration in `src/utils/RedisHandler.java` to connect to your Redis instance and ensure the PostgreSQL connection settings are correct in `Worker.java`.

6. **Run the Worker**: Execute the worker application:
   ```
   mvn exec:java -Dexec.mainClass="src.Worker"
   ```

## Usage

The worker will automatically start processing votes from Redis as soon as it is running. Ensure that the Redis service is up and running before starting the worker.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.