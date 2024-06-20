# Menggunakan image Node.js versi 18
FROM node:18-alpine

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Menjalankan build aplikasi Next.js
RUN npm run build

# Mengekspos port yang digunakan oleh aplikasi
EXPOSE 3000

# Menentukan perintah untuk menjalankan aplikasi
CMD ["npm", "start"]
