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

// CORS 설정: 모든 도메인 허용
app.use(cors());  // 모든 도메인에서의 요청 허용

app.options('*', cors()); // Preflight 요청도 모든 도메인 허용

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
