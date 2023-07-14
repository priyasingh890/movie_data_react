"use client"
import  { useState } from 'react';
import {people}  from "./fetch.js";
import Header from "./header";
import Movie_row from "./movie_row";
import Like_dislike_thumb  from "./like_dislike_thumb";

const App = () => { 
    const [movies, setData] = useState(people);
        const handleDelete = (itemId) => {
            const updatedData = movies.filter(items => items.id !== itemId);
            setData(updatedData);  
        };
    
    const handleLike = (id) => {
        const updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                const votes = movie.likes + 1 - movie.dislikes;
                return { ...movie, likes: movie.likes + 1, votes };
            }
            return movie;
        });

        const sortedMovies = updatedMovies.sort((a, b) => b.votes - a.votes);
        setData(sortedMovies);
    };


    const handleDislike = (id) => {
        const updatedMovies = movies.map((movie) => {
            if (movie.id === id) {
                const votes = movie.likes - movie.dislikes - 1;
                return { ...movie, dislikes: movie.dislikes + 1, votes };
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
                    name1={movie.name}
                    discription={movie.description}
                    url={movie.url}
                    key={movie.id}
                    onDelete={() => handleDelete(movie.id)}
                    likes={movie.likes}
                    dislikes={movie.dislikes}
                    handleLike={() => handleLike(movie.id)}
                    handleDislike={() => handleDislike(movie.id)}
                    
                />
             )}
        </div>
    ); 
};

export default App;




