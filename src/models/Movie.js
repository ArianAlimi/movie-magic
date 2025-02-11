import { Schema, model } from 'mongoose';

// Create scheme
const movieShema = new Schema({
    title: String,
    cateory: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
});

// Create model
const Movie = model('Movie', movieShema);

// Export model
export default Movie;