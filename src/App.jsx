import { useEffect, useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import Search from './components/Search';
import Genres from './components/Genres';

function App() {
  const [movies, setMovies] = useState({ results: [] });

  const url = 'https://api.themoviedb.org/3';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjRkZTQxYTkwOGVmZWIwZGJjZjBjZDFiNGQ0MTQ0NSIsIm5iZiI6MTczMDIwOTIxNS44MDcwMTIsInN1YiI6IjY3MjBlNGEyZTgzM2Q5MmVmMDYwZDIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wd7bp4b-G8dvIMrPhah8IJG286t7kudKlTdjlhEcRbE'

    }
  };

  async function fetchMovies(searchTerm, genreFilter) {
    try {
      const popularEndpoint = '/discover/movie?sort_by=popularity.desc' + genreFilter
      const searchEnpoint = '/search/movie?query=' + searchTerm

      const response = await fetch(url + (searchTerm ? searchEnpoint : popularEndpoint), options);

      const data = await response.json();
      setMovies(data);
    } catch (e) {
      console.error('Error fetching data:', e)
    }
  }

  useEffect(() => { fetchMovies() }, []);

  const handleSearch = (search) => {
    fetchMovies(search);
  }

  const handleGenres = (genre) => {
    fetchMovies('', genre);
  }

  return (
    <div>
      <div id="flex-input-genres">
        <Search onSearch={handleSearch} />
        <Genres onGenreChange={handleGenres} />
      </div>
      <Movies movies={movies} />
    </div>
  );
}

export default App;
