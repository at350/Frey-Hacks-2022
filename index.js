const express = require('express');

const app = express();

app.use(express.json( { extended: false }));
app.use(express.urlencoded({ extended: false }));

// Create API route
app.use('/api', require('./routes/api/trips'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});