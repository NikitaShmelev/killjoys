#!/bin/bash

# Wait for PostgreSQL to start
while ! nc -z db 5432; do
  sleep 0.1
done

# Apply database migrations
venv/bin/python manage.py migrate

# Start the server
exec "$@"
