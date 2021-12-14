const express = require('express');
const os = require('os');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send(`Hello ${os.hostname()}`);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});