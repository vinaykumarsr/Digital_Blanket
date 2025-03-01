# Use an official Node.js runtime as a parent image
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
