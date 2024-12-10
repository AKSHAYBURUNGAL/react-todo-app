# Stage 1: Build the React app
FROM node:16 as build

WORKDIR /app

# Copy only package files to leverage Docker layer caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the build files with nginx
FROM nginx:alpine

# Remove default nginx HTML files and add the React build
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
