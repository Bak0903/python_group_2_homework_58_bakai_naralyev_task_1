import React, { Component } from 'react';
import './Movies.css';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';
import Movie from '../../components/Movie/Movie';


class Movies extends Component {

    constructor(props) {
        super(props);
        let movies = [
            {id: 1, title: 'Alien'},
            {id: 2, title: 'Tron'},
            {id: 3, title: 'Titanic'},
            {id: 4, title: 'Interstellar'}
        ];
        this.state = {
            currentMovie: {id: 0, title: ''},
            movies,
        };
    }

    handleChange = (event, i) => {
        console.log(i);
        if (i === 0) {
            let value = event.target.value;
            let currentMovie = {...this.state.currentMovie, title: value};
            this.setState({...this.state, currentMovie});
            console.log(this.state.currentMovie);
        }
        else {
            let value = event.target.value;
            let movies = [...this.state.movies];
            let movieId = movies.findIndex(movies => {return movies.id === i;});
            movies[movieId].title = value;
            console.log(movies);
            this.setState({...this.state, movies});
            console.log(this.state.movies);
        }
    };

    newMovie = (event) => {
        event.preventDefault();
        let movie = {...this.state.currentMovie};
        const now = new Date();
        movie.id = now.getTime();
        let movies = [...this.state.movies, movie];
        this.setState({
            ...this.state,
            movies,
            currentMovie: {id: 0, title: '', status: false},
        });
    };

    isAddButtonDisabled = () => {
       return this.state.currentMovie.title === '';
    };

    removeMovie = (id) => {
        const movies = [...this.state.movies];
        movies.splice(id, 1);
        this.setState({...this.state, movies});
    };

  render() {
      console.log(localStorage);
      return (
          <div className="Movies">
              <div className={"add_form"}>
                  <AddMovieForm
                      movie={this.state.currentMovie}
                      onAddMovie={this.newMovie}
                      onChangeHandle={this.handleChange}
                      isAddButtonDisabled={this.isAddButtonDisabled()}
                />
              </div>
              <div className="List_of_movies">
                  {Object.values(this.state.movies).map((movie, i) => {return (
                      <Movie
                          key={i}
                          title={movie.title}
                          id={movie.id}
                          status={movie.status}
                          onMovieRemove={() => this.removeMovie(i)}
                          onChangeHandle={this.handleChange}
                          isAddButtonDisabled={this.isAddButtonDisabled()}
                      />
                  );})}
            </div>
          </div>
        );
  }
}

export default Movies;
