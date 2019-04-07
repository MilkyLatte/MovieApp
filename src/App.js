import React from "react";
import MovieGrid from "./components/MovieGrid";

class App extends React.Component {
  state = {
    search: "",
    movie: null
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(event);
    const APIKEY = "43ef0e0e";
    fetch(
      `http://www.omdbapi.com/?apikey=${APIKEY}&s=${
        this.state.search
      }&plot=full`
    )
      .then(success => success.json())
      .then(movies => this.setState({ movie: movies }))
      .catch(err => {
        console.log(err);
      });
  };

  // componentDidMount(){
  // const APIKEY = "43ef0e0e";
  // fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=batman&plot=full`)
  // .then((success) => success.json())
  // .then((movies) => console.log(movies))
  // .catch((err) => {console.log(err)});
  // }
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <label>Movie: </label>
            <input
              type="text"
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
            />
          </form>
        </div>
        <MovieGrid movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
