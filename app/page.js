"use client"
import  { useState } from 'react';
import {movie_data}  from "./fetch.js";
import Header from "./header";
import Movie_row from "./movie_row";
import Like_dislike_thumb  from "./like_dislike_thumb";

const App = () => { 
    const [movies, setData] = useState(movie_data);
    const handleDelete = (itemId) => {
            const updatedData = movies.filter(items => items.id !== itemId);
            setData(updatedData);  
        };
    
    const handleLike = (id) => {
        const updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                const votes = movie.votes + 1 ;
                return { ...movie, votes: movie.votes + 1, votes };
            }
            return movie;
        });

        const sortedMovies = updatedMovies.sort((a, b) => b.votes - a.votes);
        setData(sortedMovies);
    };


    const handleDislike = (id) => {
        const updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                const votes = movie.votes - 1;
                return { ...movie, votes: movie.votes + 1, votes };
            }
            return movie;
        });

        const sortedMovies = updatedMovies.sort((a, b) => b.votes - a.votes);
        setData(sortedMovies);
    };
    
    
    return (
        <div>
            {movies.map((movie) => 
                <Movie_row
                    movie_data={movie}
                    onDelete={() => handleDelete(movie.id)}
                    likes={movie.votes}
                    handleLike={() => handleLike(movie.id)}
                    handleDislike={() => handleDislike(movie.id)}
                    
                />
             )}
        </div>
    ); 
};

export default App;




