// app.js
const express = require('express');
const app = express();
app.use(express.json());

// 사용자 관리 API
// 모든 사용자 조회 (optional: 쿼리 파라미터 사용)
app.get('/users', (req, res) => {
    const { name, age } = req.query;
    if (name || age) {
        res.send(`Filter users by name: ${name || 'N/A'}, age: ${age || 'N/A'}`);
    } else {
        res.send('Get all users');
    }
});

// 특정 사용자 조회 (경로 파라미터 사용)
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get user with ID: ${id}`);
});

// 사용자 생성 (JSON Body 사용)
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    res.send(`Create a user with name: ${name}, age: ${age}`);
});

// 주문 관리 API
// 모든 주문 조회
app.get('/orders', (req, res) => {
    const { status } = req.query;
    if (status) {
        res.send(`Filter orders by status: ${status}`);
    } else {
        res.send('Get all orders');
    }
});

// 특정 주문 조회
app.get('/orders/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Get order with ID: ${id}`);
});

// 주문 생성
app.post('/orders', (req, res) => {
    const { product, quantity } = req.body;
    res.send(`Create an order for product: ${product}, quantity: ${quantity}`);
});

app.listen(3000, () => console.log('Monolithic app running on port 3000'));
