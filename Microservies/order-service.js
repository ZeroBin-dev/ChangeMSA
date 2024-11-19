const express = require('express');
const app = express();
app.use(express.json());

const orders = [
    { id: 1, userId: 1, item: 'Book', quantity: 2 },
    { id: 2, userId: 2, item: 'Laptop', quantity: 1 },
];

app.get('/orders', (req, res) => res.json(orders)); // 모든 주문 조회
app.post('/orders', (req, res) => {
    const order = { id: orders.length + 1, ...req.body };
    orders.push(order);
    res.status(201).json(order);
}); // 주문 생성

app.listen(3002, () => console.log('Order service running on port 3002'));
