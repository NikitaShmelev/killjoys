FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update && \
    apt-get -y install netcat

# Set the working directory in the container
WORKDIR ./

# Install python dependencies
COPY requirements.txt ./
RUN python -m venv venv
RUN venv/bin/pip install --upgrade pip && \
    venv/bin/pip install -r requirements.txt

# Copy project code
COPY . ./

# Run the entrypoint script
ENTRYPOINT ["./entrypoint.sh"]
