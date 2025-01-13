const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
