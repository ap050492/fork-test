import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done Prasad!');
})

app.get('/status', (req, res) => {
    res.send('Please Prasad Check this...!');
})


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
