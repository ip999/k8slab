// express app to return hostname on get requests
// import express and os
const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.json(
        {
            hostname: `${os.hostname()}`,
            metadata: `${process.env.MY_POD_NAME}`
        }
    );
});

app.listen(8080, () => {
    console.log(`Server listening on port 8080`);
});
