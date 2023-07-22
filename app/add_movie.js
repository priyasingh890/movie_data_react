import React, { useState } from 'react';

const MovieForm = ({handleAddMovie_data }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [release_date, setrelease_date] = useState('');
  const [hour, sethour] = useState('');
  const [min, setmin] = useState('');
  const [genre, setgenre] = useState('');
  const [overview, setoverview] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [votes, setVotes] = useState(0);
  const handleGenreChange = (e) => {
    const { value } = e.target;
    setgenre((prevSelectedGenres) =>
      prevSelectedGenres.includes(value)
        ? prevSelectedGenres.filter((genre) => genre !== value)
        : [...prevSelectedGenres, value]
    );
  };
  
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };
  
  const handleAddMovie = () => {
    const newMovie = {  
      id: Date.now(),
      title,
      director,
      release_date,
      hour,
      min,
      genre:genre,
      overview ,
      imageUrl: selectedImage ? URL.createObjectURL(selectedImage) : null,
      votes
    };
    handleAddMovie_data( newMovie);

    setTitle('');
    setDirector('');
    setrelease_date('');
    sethour('');
    setmin('');
    setgenre([]);
    setoverview('');
    setSelectedImage(null);
    setVotes(0);
  };

  return (
    <div className="movie_add">
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
            <select
                type="number" 
                id="year" 
                value={release_date} 
                onChange={(e) =>  setrelease_date(e.target.value)} 
                required 
            >
                <option value="">Select the year</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                {/* Add more years as needed */}
           </select>
       </div>
       <div className="duration">
            <div className="times">Movie Duration</div>
                <div className="hour_min">
                    <select
                        type="number" 
                        id="hour" 
                        value={hour} 
                        onChange={(e) => sethour(e.target.value)} 
                        required 
                    >
                       <option value="">Select the minutes</option>
                       <option value="15">15</option>
                       <option value="30">30</option>
                       <option value="45">45</option>
                      
                    </select>

                    <div className="times3">Hour</div>
                    <select
                        type="number" 
                        id="min" 
                        value={min} 
                        onChange={(e) => setmin(e.target.value)} 
                        required 
                    >
                       <option value="">Select the minutes</option>
                       <option value="15">15</option>
                       <option value="30">30</option>
                       <option value="45">45</option>
                  
                    </select>
                    <div className="time2">Min</div>
                   
            </div>
        </div>
        <div className="genre">
             <div className="genre_row">Movie genre</div>
            <div className="select_row">Select all that is applicabale</div>
            <div className="select_option">
                <div className="genres">
                      <input
                        type="checkbox"
                        value="Action"
                        checked={genre.includes('Action')}
                        onChange={handleGenreChange}
                      />
                      Action
                
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        value="Comedy"
                        checked={genre.includes('Comedy')}
                        onChange={handleGenreChange}
                    />
                    Comedy
                
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        value="Drama"
                        checked={genre.includes('Drama')}
                        onChange={handleGenreChange}
                    />
                    Drama
                
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        value="Biography"
                        checked={genre.includes('Biography')}
                        onChange={handleGenreChange}
                    />
                    Biography
              
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        value="Romantic"
                        checked={genre.includes('Romantic')}
                        onChange={handleGenreChange}
                    />
                    Romantic
                
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        id="select"
                        value="Adventure"
                        checked={genre.includes('Adventure')}
                        onChange={handleGenreChange}
                    />
                    Adventure
                
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        
                        id="select"
                        value="Family"
                        checked={genre.includes('Family')}
                        onChange={handleGenreChange}
                    />
                   Family
                
                </div>
                <div className="genres">
                    <input
                        type="checkbox"
                        value="Documentary"
                        checked={genre.includes('Documentary')}
                        onChange={handleGenreChange}
                    />
                   Documentary
                
                </div>
        </div>
        </div>
        <div className="description_row">Description</div> 
        <div className="description">
             <input 
                type="text"
                id="description"
                value={overview}
                onChange={(e) => setoverview(e.target.value)}
                required
            />  
        </div>
        <div className="image_upload">Upload Image Of Movie</div>
        <div className="image">
             <input type="file"  className="file-input" onChange={handleImageChange} />
        </div>
        {selectedImage && (
      
        <img src={URL.createObjectURL(selectedImage)}/>
        
        )}
    <button   type="text" id="add_option" onClick={handleAddMovie}>Add Movie  +  </button>
    </div>
       
     
  );
};

export default MovieForm;



