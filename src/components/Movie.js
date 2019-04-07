import React from 'react';
import './Movie.css';




class Movie extends React.Component {
    state = {
        movie: null,
        showingMovie: false
    }

    render() {
        return (
                <div className="movie-small">
                    <img src={this.props.movie.Poster} alt="movie" />
                    <h3>{this.props.movie.Title}</h3>
                </div>
        );
    }
}

export default Movie;