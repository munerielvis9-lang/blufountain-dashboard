# Stage 1: Build the Angular Application
ARG NODE_VERSION=22.14.0-alpine
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

# Copy the Angular files into the container
COPY . .

# Install dependencies and build the Angular project
RUN npm install --legacy-peer-deps
RUN npm run build

# -------------------------
# Stage 2: Serve the app with Nginx
FROM alpine:latest AS runner

# Install Nginx and other required tools
RUN apk add --no-cache nginx bash openssl curl

# Create SSL directory
RUN mkdir -p /etc/nginx/ssl

# Copy your Nginx configuration files
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/cert.pem /etc/nginx/ssl/cert.pem
COPY nginx/key.pem /etc/nginx/ssl/key.pem

# Clear out the default Nginx placeholder files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular files from Stage 1 into the Nginx server folder
COPY --from=builder /app/dist/blufountain-app/browser /usr/share/nginx/html

EXPOSE 80 443

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]