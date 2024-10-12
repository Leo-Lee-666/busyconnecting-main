const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/db');
require('dotenv').config();  // .env 파일의 설정을 불러옵니다

// 추가: adminRoutes를 불러오기
const adminRoutes = require('./routes/adminRoutes'); 

const app = express();
const port = 3001;

// CORS 설정: 여러 도메인을 허용
const allowedOrigins = ['http://localhost:3000', 'https://busyconnecting-main-production.up.railway.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Postman과 같은 도구를 허용
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Admin 라우트 설정
app.use('/api/admin', adminRoutes);

// Routes
app.use('/api/blogPage', require('./routes/blogRoutes'));
app.use('/api/infoPage', require('./routes/infoRoutes'));
app.use('/api/homepage', require('./routes/homeRoutes'));
app.use('/api/newsletter', require('./routes/newsletterRoutes'));
app.use('/api/meeting', require('./routes/meetingRoutes'));
app.use('/api/userData', require('./routes/userDataRoutes'));

// 모든 요청에 대해 index.html 파일을 서빙
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
