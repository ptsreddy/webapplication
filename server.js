const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulate a simple login check
    if (username === 'user' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Login failed. Please try again.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
