# Menggunakan image Node.js versi 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke working directory
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Perintah untuk menjalankan aplikasi Next.js
CMD ["npm", "start"]
