import Like_dislike_thumb from "./like_dislike_thumb.js"
import Fetch from"./fetch.js"
import App from "./page.js"
const Movie_row = ({ name1, discription, url, key, onDelete, data1,handleLike, handleDislike, likes,  dislikes}) => {
    return(
        <div className="movie_box">
            <div className="image_row"><img src={url}/></div>
            <div className="movie_row">
                <div className="movie_details_row">
                    <p>{name1}</p>
                    <h3></h3>
                    <p>{discription}</p>     
                </div>
                <div className="like_dislike_row">
                <Like_dislike_thumb
                    onclick={onDelete}
                    datas={data1}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                    likes={likes}
                    dislikes={dislikes}
                />
             </div>
             </div>
         </div>
    )
};
export default Movie_row;

