import React from 'react';

function Movie(props) {
    return (
        <div className="d-flex justify-content-start m-3" id="movie">
            <img src={props.moviePoster} alt="movie"></img>
        </div>

    );
}

export default Movie;