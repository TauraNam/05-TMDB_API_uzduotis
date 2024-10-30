const Search = ({ onSearch }) => {
  const handleInputSearch = (e) => {
    if (e.target.value.length >= 2 || e.target.value.length == 0) {
      onSearch(e.target.value)
    }
  }
  return (
    <div id="search">
      <input type="text" placeholder="Search for a movie" id="search-input" onChange={handleInputSearch} />
    </div>
  )
}

export default Search
