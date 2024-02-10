# Tutorial Menjalankan Proyek Node dengan Express dan Sequelize

## Instalasi

1. Install dependensi menggunakan npm:

    ```bash
    npm install
    ```

## Migrasi Tabel

1. Sebelum menjalankan proyek, pastikan untuk mengonfigurasi koneksi database Anda di file `config/config.json`. Sesuaikan dengan database yang ingin Anda gunakan.

2. Jalankan migrasi untuk membuat tabel-tabel yang diperlukan di database:

    ```bash
    npx sequelize-cli db:migrate
    ```

## Seeder

1. Setelah migrasi selesai, jalankan seeder untuk mengisikan data awal ke dalam tabel:

    ```bash
    npx sequelize-cli db:seed:all
    ```

## Menjalankan Server

Terakhir, jalankan server menggunakan perintah berikut:

```bash
node server.js
```
