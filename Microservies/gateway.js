const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

const userServiceProxy = httpProxy('http://localhost:3001', {
    proxyReqPathResolver: (req) => {
        return `/users${req.url}`; // 대상 서비스에 `/users`를 추가
    }
});

const orderServiceProxy = httpProxy('http://localhost:3002', {
    proxyReqPathResolver: (req) => {
        return `/orders${req.url}`; // 대상 서비스에 `/orders`를 추가
    }
});

// JSON 요청 본문 처리 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 사용자 서비스 라우팅
app.use('/users', (req, res, next) => {
    userServiceProxy(req, res, next);
});

// 주문 서비스 라우팅
app.use('/orders', (req, res, next) => {
    orderServiceProxy(req, res, next);
});

app.listen(3000, () => console.log('API Gateway running on port 3000'));
