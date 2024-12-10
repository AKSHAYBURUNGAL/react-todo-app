# Use node:16 for the backend image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy only package files to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose port 5000 for the backend
EXPOSE 5000

# Run the app in production mode (optional)
ENV NODE_ENV=production

# Run the app using npm start
CMD ["npm", "start"]
