import { Router } from 'express';
import movieService from '../services/movie-service.js';

const routes = Router();

routes.get('/', (req, res) => {
    const movies = movieService.getAll();
    res.render('home', {movies});
});

routes.get('/about', (req, res) => {
    res.render('about');
});

routes.get('/search', (req, res) => {
    res.render('search');
});


export default routes;
