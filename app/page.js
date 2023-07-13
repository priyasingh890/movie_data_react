"use client"
import React, { useState } from 'react';
import {people}  from "./fetch.js";
import Header from "./header";
import Movie_row from "./movie_row";
import Like_dislike_thumb  from "./like_dislike_thumb";

const App = () => { 
    const [data, setData] = useState(people);
    const handleDelete = (itemId) => {
        const updatedData = data.filter(items => items.id !== itemId);
        setData(updatedData);  
    };
    
    const handleLike = (movieId) => {
        const updatedMovies = data.map((movie) =>
        movie.id === movieId
        ? { ...movie, likes: movie.likes + 1, likes: movie.likes - 1 }
        : movie
        );
        setData(updatedMovies);
    };
    
    const handleSortByLikes = () => {
        const sortedMovies = [...data].sort((a, b) => {
        if (b.likes !== a.likes) {
            return b.likes - a.likes;
        }else {
        return b.likes - a.likes;
        }
        });
        setData(sortedMovies);
    };
    
    
    return (
        <div>
              <h1>Movie List</h1>
              <button onClick={handleSortByLikes}>Sort by Likes</button>
            {data.map((item) => 
                <Movie_row
                    name1={item.name}
                    discription={item.description}
                    url={item.url}
                    key={item.id}
                    onDelete={() => handleDelete(item.id)}
                    data1={item}
                    onLikedislike={handleLike}  
                   
                   
                    
                  
                />
             )}
        </div>
    ); 
};

export default App;




