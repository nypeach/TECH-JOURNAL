import React from 'react';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';
import movieData from '../data/movieData.js';
import AddMovie from './AddMovie.jsx';

const movies = [
  { title: 'Mean Girls' },
  { title: 'Hackers' },
  { title: 'The Grey' },
  { title: 'Sunshine' },
  { title: 'Ex Machina' },
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchEntry = this.handleSearchEntry.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatchedToggle = this.handleWatchedToggle.bind(this);

    this.state = {
      movies: [
        { title: 'Mean Girls', watched: false },
        { title: 'Hackers', watched: false },
        { title: 'The Grey', watched: false },
        { title: 'Sunshine', watched: false },
        { title: 'Ex Machina', watched: false }
      ],
      searchTerm: ''


    };

  }

  handleWatchedToggle() {
    this.setState((currentState) => ({
      watched: !currentState.watched,
    }))
  }


  handleAdd(event) {
    var optionTxt = prompt('Please enter the name of the movie you want to add', 'Enter Movie Name');
    this.setState({ movies: this.state.movies.concat({ 'title': optionTxt, 'watched': false }) })
  }

  handleSubmit(event) {
    if (this.dynamicSearch().length === 0) {
      alert('Please add a Movie to continue!');
    } else {
      event.preventDefault();
    }
  }

  handleSearchEntry(e) {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    });
  }

  dynamicSearch() {
    return this.state.movies.filter((movie) => {
      return movie.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }


  render() {


    return (

      <div>

        <div className="card text-centered mx-auto" style={{ width: '80vw' }}>
          <div className="card header" as="h5">

            <Search
              searchTerm={this.state.searchTerm}
              handleSearchEntry={this.handleSearchEntry}
              filteredMovies={this.dynamicSearch()}
              handleSubmit={this.handleSubmit}
              handleAdd={this.handleAdd}
            />

          </div>


          <div className="card text-centered body mx-auto" style={{ width: '80vw' }}>
            <div className="d-flex flex-row-reverse">
              <div className="p-2 dflexrow">Watched</div>
              <div className="p-2 dflexrow">Un-Watched</div>
              <div className="p-2 dflexrow">Favorite</div>
            </div>
            <div className="card text-centered movieList flush" as="h5">I Like Movies</div>
            <MovieList
              watched={this.state.movies}
              filteredMovies={this.dynamicSearch()}
            // watchedMovies={this.handleWatchedToggle()}
            />
          </div>
        </div>



      </div>

    );

  }


}

export default App;