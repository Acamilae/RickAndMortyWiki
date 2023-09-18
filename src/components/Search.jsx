import '../styles/search.css'

const Search = ({ setSearch, setpageNumber }) => {
  return (
    <div >
      <form action="" className=" flex-sm-row flex-column d-flex justify-content-center align-item-center gap-4 mb-5">
            <input 
            onChange={(e) => {
                setpageNumber(1)
                setSearch(e.target.value);}} 
            placeholder="Busca un personaje" 
            type="text" 
            className="searchBar setSearch" />

            <button onClick={e => {e.preventDefault();}} className="searchBtn btn btn-info fs-5">Buscar</button>
      </form>
    </div>
  )
}

export default Search
