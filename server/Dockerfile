# Base image on python 3.9.X
FROM python:3

# Prints python std outs directly to terminal
ENV PYTHONUNBUFFERED=1

# Make a directory
# RUN mkdir /server

# Set the directory to work from
WORKDIR /server

# Install python requirements
COPY requirements.txt /server
RUN pip install -r requirements.txt

# Copy our local server files into the server folder
COPY . /server

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]