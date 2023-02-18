# Set the base image to the official Python image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Update packages and install required packages for PostgreSQL
RUN apt-get update && \
    apt-get install -y postgresql-client libpq-dev

# Install pyenv
RUN curl https://pyenv.run | bash

# Set environment variables for pyenv
ENV HOME /root
ENV PYENV_ROOT $HOME/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH

# Install Python version 3.9.1
RUN pyenv install 3.9.1 && \
    pyenv global 3.9.1

# Create a virtual environment and activate it
RUN python -m venv venv
ENV PATH="/app/venv/bin:$PATH"
RUN /bin/bash -c "source /app/venv/bin/activate"

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Set the environment variable for Django to run in production mode
ENV DJANGO_SETTINGS_MODULE=myapp.settings.production

# Run migrations and collect static files
RUN python manage.py migrate --noinput
RUN python manage.py collectstatic --noinput

# Expose port 8000 for Django to run on
EXPOSE 8000

# Start the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
