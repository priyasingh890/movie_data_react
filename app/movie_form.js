"use client"
import  { useState } from 'react';
const Movie_form = ({Add_movie_data}) => {
  const [title, setTitle] = useState(Add_movie_data.name);
  const [director, setDirector] = useState(Add_movie_data.description);
   const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new movie object with the form data
    const newMovie = {
      name,
      description
    };

    // Perform any desired actions with the new movie object
    console.log(newMovie);

    // Clear the form fields
    setTitle('');
    setDirector('');
   
  };
    return (
    <form className="movie_form">
      <div className="title">Fill this form to add Movie</div>
      <div className="title_name">
         <div className="title1">Name of  Movie</div>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
     </div>
     <div className="years_name">
         <div className="years">Year of Release</div>
         <input
        type="text"
        id="director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
        
      
      </div>
   </form>
  );

};

export default Movie_form



