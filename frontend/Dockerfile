# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the app source
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Expose port
EXPOSE 3000

# 7. Start the app
CMD ["npm", "start"]
