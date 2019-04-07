import React from "react";
import "./Movie.css";

class FullMovie extends React.Component {
  state = {
    movie: null
  };

  componentDidMount() {
    const APIKEY = "43ef0e0e";
    fetch(
      `http://www.omdbapi.com/?apikey=${APIKEY}&i=${
        this.props.movie.imdbID
      }&plot=full`
    )
      .then(res => res.json())
      .then(m => this.setState({ movie: m }))
      .catch(err => console.log(err));
  }

  handleRender = () => {
    if (this.state.movie) {
      console.log(this.state.movie);
      return (
        <div className="row">
          <div className="col s12 m4">
            <img className="full-image" src={this.state.movie.Poster} alt="" />
          </div>
          <div className="col s12 m8 text-box">
            <h3 id="title">
              {this.state.movie.Title} ({this.state.movie.Year})
            </h3>
            <hr id="title-line" />
            <h4 id="score">
              <strong>IMDB RATING: </strong>
              {this.state.movie.imdbRating}
            </h4>

            <p>
              <strong>Synopsis: </strong> {this.state.movie.Plot}
            </p>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  render() {
    return <div className="full-movie">{this.handleRender()}</div>;
  }
}

export default FullMovie;
