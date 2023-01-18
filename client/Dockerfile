# Set our app to be based in node
FROM node:16

# Set our working directory in docker
WORKDIR /client

# Create a path to access node modules
ENV PATH="./node_modules/.bin:$PATH"

# Copy over our react files to docker
COPY . .

# Build it!
RUN npm run build

# Start the build!
# CMD ["npm", "start"]