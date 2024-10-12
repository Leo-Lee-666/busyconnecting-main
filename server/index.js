const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/db');
require('dotenv').config();  // .env 파일의 설정을 불러옵니다

// 추가: adminRoutes를 불러오기
const adminRoutes = require('./routes/adminRoutes'); 

const app = express();
const port = process.env.PORT || 3001;  // Railway에서 제공하는 PORT 사용

// Middleware setup
app.use(cors({
  origin: process.env.CLIENT_URL || 'https://busyconnecting-main-production.up.railway.app',  // Railway의 클라이언트 URL을 설정
  credentials: true,  // 쿠키 및 인증 관련 설정
  methods: ['GET', 'POST', 'PUT', 'DELETE']  // 필요한 메서드 허용
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Admin 라우트 설정
app.use('/api/admin', adminRoutes);  // 반드시 추가

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
  console.log(`Server is running on port ${port}`);
});
