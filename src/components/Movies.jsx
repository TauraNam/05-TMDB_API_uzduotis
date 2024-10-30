import Movie from "./Movie"

const Movies = ({ movies }) => {
  return (
    <div>
      <h2>Populiariausi filmai</h2>
      <div id="movies">
        {
          movies.results.length > 0 ? (
            movies.results.slice(10).map(item => (
              <Movie key={item.id} movie={item} />
            ))
          ) : (
            <p>No movies found.</p>
          )
        }
      </div>
    </div>
  )
}

export default Movies
