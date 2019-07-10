import React,{ Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'
import { generateKeyPairSync } from 'crypto';

// class Movie extends Component {
//     render(){
//         return(
//         <div>
//             <MoviePoster poster ={this.props.poster}/>
//             <h1>{this.props.title}</h1>
//         </div>
//         );
//     }
// }

// class MoviePoster extends Component {

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render(){

//         return(
//             <img src={this.props.poster} alt='Hpic'/>
//         )
//     }
// }
// dumb( functional ) component 

function Movie ({title,poster,genres,synopsis}){
    return(
        <div className="Movie">

            <div className="Movie__Columns">
                <MoviePoster poster ={poster} alt={title}/>
            </div>

            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className ="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} index={index}/>)}
                </div>
                <p className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />  
                </p>
            </div>
            
        </div>
    )
}

function MoviePoster ({poster,alt}){
    return (
        <img src = {poster} alt={alt} />
    )
}

function MovieGenre({genre}){
    return(
        <span className="Movie__Genre" >{genre}</span>
    )
}
export default Movie;