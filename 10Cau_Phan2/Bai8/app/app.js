const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Tạo kết nối MySQL
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Kiểm tra kết nối
connection.connect((err) => {
  if (err) {
    console.error('Không thể kết nối đến MySQL:', err);
    process.exit(1);
  }
  console.log('Đã kết nối đến MySQL!');
});

// Route chính
app.get('/', (req, res) => {
  connection.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      res.status(500).send('Lỗi khi truy vấn MySQL');
      return;
    }
    res.send(`Thời gian hiện tại từ MySQL: ${results[0].currentTime}`);
  });
});

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`Ứng dụng Node.js đang chạy tại http://localhost:${port}`);
});