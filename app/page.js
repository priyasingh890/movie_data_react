"use client"
import Add_movie from "./add_movie.js"
import  { useState } from 'react';
import {movie_data}  from "./data.js";
import Header from "./header";
import Movie_row from "./movie_row";
import Like_dislike_thumb  from "./like_dislike_thumb";
import  Movie_form  from "./movie_form.js";

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
    
    const handleAddMovie1 = (newMovie) => {
        const updatedMovies = [...movies];
        updatedMovies.push(newMovie);
        
    setData( updatedMovies);
    };
    
     return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Movie_row
                  movie_data={movie}
                  onDelete={() => handleDelete(movie.id)}
                  handleLike={() => handleLike(movie.id)}
                  handleDislike={() => handleDislike(movie.id)}
                  Add_movie_data={movie}
                  likes={movie.votes}
                  
          />
          
        </div>
      ))}
      <Movie_form/>
      <Add_movie originalMovie={movies} 
            handleAddMovie1={handleAddMovie1}
      />
    </div>
  );
};

export default App;






