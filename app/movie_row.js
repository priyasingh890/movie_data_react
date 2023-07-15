import Like_dislike_thumb from "./like_dislike_thumb.js"
import Fetch from"./fetch.js"
import App from "./page.js"
const Movie_row = ({ movie_data, onDelete,handleLike, handleDislike, likes,  dislikes}) => {
    return(
        <div className="movie_box">
            <div className="image_row"><img src={movie_data.url}/></div>
            <div className="movie_row">
                <div className="movie_details_row">
                    <p>{movie_data.name}</p>
                    <h3></h3>
                    <p>{movie_data.description}</p>     
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

