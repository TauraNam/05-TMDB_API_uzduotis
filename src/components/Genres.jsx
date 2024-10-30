import { useEffect, useState } from 'react';


const Genres = ({ onGenreChange }) => {

  const [genresState, setGenresState] = useState({ genres: [] });

  const handleSelectGenre = (e) => {
    if (e.target.value) {
      onGenreChange('&with_genres=' + e.target.value)
    } else {
      onGenreChange('')
    }
  }

  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjRkZTQxYTkwOGVmZWIwZGJjZjBjZDFiNGQ0MTQ0NSIsIm5iZiI6MTczMDIwOTIxNS44MDcwMTIsInN1YiI6IjY3MjBlNGEyZTgzM2Q5MmVmMDYwZDIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wd7bp4b-G8dvIMrPhah8IJG286t7kudKlTdjlhEcRbE'

    }
  };

  async function fetchGenres() {
    try {
      const response = await fetch(url, options);

      const data = await response.json();
      setGenresState(data)
    } catch (e) {
      console.error('Error fetching data:', e)
    }
  }

  useEffect(() => {
    fetchGenres();
  }, []);



  return (
    <div id="genres">
      <select id="genres-select" defaultValue={''} onChange={handleSelectGenre}>
        <option value=''>All genres</option>
        {
          genresState.genres.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Genres
