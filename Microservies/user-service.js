const express = require('express');
const app = express();
app.use(express.json());

const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 32 },
];

app.get('/users', (req, res) => res.json(users)); // 모든 사용자 조회
app.post('/users', (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
}); // 사용자 생성

app.listen(3001, () => console.log('User service running on port 3001'));
