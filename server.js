const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/checkUserInput/:username/:password', async (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    const externalDataUrl = 'https://23564094.github.io/CDN.txt';

    try {
        const response = await fetch(externalDataUrl);
        const externalData = await response.text();

        // Compare user input with external data
        const isMatch = externalData.includes(`${username}:${password}`);
        
        res.json({ isMatch });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
