import { Schema, model, Types } from 'mongoose';

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
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }],
});

// Create model
const Movie = model('Movie', movieShema);

// Export model
export default Movie;