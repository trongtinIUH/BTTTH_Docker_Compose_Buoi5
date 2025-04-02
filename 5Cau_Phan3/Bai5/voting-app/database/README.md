# Database Setup for Voting Application

This directory contains the necessary files to set up and initialize the PostgreSQL database for the voting application.

## Initialization

To initialize the database, execute the SQL commands found in the `init.sql` file. This file includes the creation of tables and any seed data required for the application to function properly.

## Database Configuration

Ensure that your PostgreSQL server is running and that you have the necessary credentials to connect to it. Update the connection settings in the worker application as needed to point to this database.

## Usage

After initializing the database, you can start the worker service to process votes and store results in this database. Make sure to follow the instructions in the worker's README for proper configuration and execution.