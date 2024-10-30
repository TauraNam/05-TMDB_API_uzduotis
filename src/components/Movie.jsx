import FavoriteMovies from './FavoriteMovies';

const Movie = ({ movie }) => {
  return (
    <div id="movie-item">
      <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="movie-picture">
      </img>
      <FavoriteMovies movieId={movie.id} />
      <h3>{movie.title}</h3>
      <p>{movie.release_date.slice(0, 4)}</p>

    </div>
  )
}

export default Movie
