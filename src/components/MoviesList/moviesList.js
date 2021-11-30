import React from 'react';
import Movie from '../Movie/movie';



function MoviesList(props) {
    return (

        <div className="container-fluid movie-app" >
            <div className="row">{
                props.movies.map((movie, index) =>
                    <Movie moviePoster={movie.Poster}></Movie>
                )
            }</div>
        </div>

    );
}

export default MoviesList;


