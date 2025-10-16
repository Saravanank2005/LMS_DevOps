# ---------------------------
# Stage 1: Build React app
# ---------------------------
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy source code
COPY . .

# Build app for production
RUN npm run build


# ---------------------------
# Stage 2: Serve with Nginx
# ---------------------------
FROM nginx:stable-alpine

# Copy build output to Nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
