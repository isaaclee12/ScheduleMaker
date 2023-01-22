# Base image on python 3.9.X
FROM python:3

# Prints python std outs directly to terminal
ENV PYTHONUNBUFFERED=1

# Make a directory
# RUN mkdir /server

# Set the directory to work from
WORKDIR /server

# Copy our local server files into the server folder
COPY . .

# Install python requirements
RUN pip install -r requirements.txt

# Copy over files
COPY . /server/

# Expose port
EXPOSE 8000

# Run django
# CMD ["python", "manage.py", "runserver"]