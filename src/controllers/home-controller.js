import { Router } from 'express';
import movies from '../movies.js';// Temporary solution

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home', {movies});
});

routes.get('/about', (req, res) => {
    res.render('about');
});

routes.get('/search', (req, res) => {
    res.render('search');
});


export default routes;
