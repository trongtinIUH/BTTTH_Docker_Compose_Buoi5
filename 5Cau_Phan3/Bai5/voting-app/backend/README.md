# Voting Application Backend

This document provides an overview of the backend service of the voting application, which is built using Node.js and Express.

## Overview

The backend service is responsible for handling requests related to voting results. It communicates with the Redis service for temporary vote storage and interacts with the Java worker to process votes and store results in the PostgreSQL database.

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd voting-app/backend
   ```

2. **Install Dependencies**
   Ensure you have Node.js installed. Then, run the following command to install the required packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the backend server using:
   ```bash
   npm start
   ```
   The server will be running on `http://localhost:5001`.

## Usage

The backend service exposes endpoints to retrieve voting results. You can access these endpoints via HTTP requests. Refer to the routes defined in `src/routes/index.js` for available endpoints and their usage.

## Dependencies

This backend service relies on the following npm packages:
- express
- redis
- body-parser

Make sure to check `package.json` for the complete list of dependencies.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.