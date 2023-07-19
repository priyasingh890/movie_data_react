import React, { useState } from 'react';

const MovieForm = ({ movies,   handleAddMovie1 }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  

  const handleAddMovie = () => {
    // Create a new movie object with the form data
    const newMovie = {
      title,
      director,
      year
      // Add more properties if needed (genre, duration, etc.)
    };

    // Update the movies state by adding the new movie to the existing movies array
      handleAddMovie1( newMovie);

    // Clear the form fields after adding the movie
    setTitle('');
    setDirector('');
    setYear('');
  };

  return (
    <div>
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
    <div className="title_name">
         <div className="title1">Director</div>
         <input
            type="text"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
         />
    </div>
    <div className="years_name">
         <div className="years">Year of Release</div>
         <input type="number" 
         id="year" value={year} 
         onChange={(e) => setYear(e.target.value)} 
         required />
        
      
      </div>
    
    

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default MovieForm;

       
      
      
      
      
      
      


