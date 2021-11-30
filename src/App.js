import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header.js';
import MoviesList from './components/MoviesList/moviesList';
import SearchBox from './components/SearchBox/searchBox';


function App() {

  /// usestate that hold exmple of json movies
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  const getMoviesRequest = async (searchValue) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=d9afdd4`);
    const responseJson = await response.json();

    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  }

  console.log()

  useEffect(() => { getMoviesRequest(searchValue) }, [searchValue]);
  return (
    <div id="app">
      <Header> </Header>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
      <MoviesList movies={movies}></MoviesList>
    </div>
  );
}

export default App;