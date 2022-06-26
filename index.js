const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const Trips = require('./Trips.js');
const AllTrips = require('./AllTrips.js');

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json( { extended: false }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.render('index', {
        Trips
    })
});

// Create API route
app.use('/api', require('./routes/api/trips'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});