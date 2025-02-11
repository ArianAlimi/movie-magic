import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';
import showRatingHelper from './helpers/rating-helper.js';
import mongoose from 'mongoose';

const app = express();

// db configuration

try {
    const url = 'mongodb://localhost27017/magic-movies';
    await mongoose.connect();

    console.log('DB connected successfuly');
} catch (err) {
    console.log('Cannot connect to DB');
    console.error(err.message);
}


// handlebars configuration

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating: showRatingHelper,
    }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// express configuration
app.use('/static', express.static('./src/public'));
app.use(express.urlencoded({ extended: false }));

// setup routes
app.use(routes);

// start server
app.listen(5000, () => console.log('http://localhost:5000...'));
