# Redis Service Documentation

This directory contains the Redis service used for temporary vote storage in the multi-tier voting application.

## Overview

The Redis service acts as a fast, in-memory data store that temporarily holds votes before they are processed by the Java worker and stored in the PostgreSQL database. This allows for quick access and retrieval of voting data.

## Setup Instructions

1. **Install Redis**: Ensure that Redis is installed on your machine. You can download it from the [official Redis website](https://redis.io/download).

2. **Start Redis Server**: Run the following command to start the Redis server:
   ```
   redis-server
   ```

3. **Configuration**: You may configure Redis settings in the `redis.conf` file as needed for your environment.

## Usage

- The Redis service will be accessed by the Python frontend to store votes temporarily.
- The Java worker will retrieve votes from Redis for processing and storing in the PostgreSQL database.

## Commands

- To interact with Redis, you can use the Redis CLI:
  ```
  redis-cli
  ```

- Common commands include:
  - `SET key value` to store a vote.
  - `GET key` to retrieve a vote.
  - `DEL key` to delete a vote.

## Notes

- Ensure that the Redis server is running before starting the frontend and worker services.
- Monitor Redis performance and memory usage, especially under high load conditions.