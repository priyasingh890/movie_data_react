import Like_dislike_thumb from "./like_dislike_thumb.js"
import Header from "./header.js"
import Fetch from"./data.js"
import App from "./page.js"
import Movie_form from "./movie_form.js"
const Movie_row = ({ movie_data, onDelete,handleLike, handleDislike, likes,  dislikes,  Add_movie_data}) => {
    return(
        <div className="movie_box">
            
            <div className="image_row"><img src={movie_data.imageUrl}/></div>
            <div className="movie_row">
                <div className="movie_details_row">
                    <p>{movie_data.title}</p>
                    <h3></h3>
                    <p>{movie_data.director}</p> 
                    <p>{movie_data.year}/{movie_data.hours}/{movie_data.min}</p> 
                    <p>{movie_data.genre}</p>
                    <p>{movie_data.duration}</p>
                           
                </div>
                <div className="like_dislike_row">
                <Like_dislike_thumb
                    onclick={onDelete}
                   
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                    likes={likes}
                   
                />
             </div>
          </div>
        
       
       </div>
    )
};
export default Movie_row;

