import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done Amit 12!');
})

app.get('/status', (req, res) => {
    res.send('Status Check!');
})


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
