import React from "react";
import Movie from "./Movie";
import FullMovie from "./FullMovie";
import "./Movie.css";

class MovieGrid extends React.Component {
  state = {
    renderBig: false,
    index: null,
    movie: null
  };

  handleClick(m) {
    console.log(m);
    this.setState({
      movie: m,
      renderBig: true
    });
  }

  ShowMovie = () => {
    if (this.props.movie) {
      let results = [];

      for (let i = 0; i < this.props.movie.Search.length; i++) {
        results.push(
          <div
            className="col s12 m6"
            onClick={this.handleClick.bind(this, this.props.movie.Search[i])}
            key={i}
          >
            <Movie movie={this.props.movie.Search[i]} />
          </div>
        );
      }
      return <div className="movieGrid">{results}</div>;
    } else {
      return null;
    }
  };

  ShowBig = () => {
    if (this.state.renderBig) {
      return <FullMovie movie={this.state.movie} />;
    }
  };

  closeBig = () => {
    if (this.state.renderBig) {
      this.setState({ renderBig: false });
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.closeBig}>
          <div className="container">
            <div className="row">{this.ShowMovie()}</div>
          </div>
        </div>
        {this.ShowBig()}
      </div>
    );
  }
}

export default MovieGrid;
