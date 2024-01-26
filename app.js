const express = require('express');
const app = express();
const port = 3000;

// API Routes
const additionAPIRoute = require('./apis/additionAPI');


// Connecting API routes
app.use('/api', additionAPIRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})