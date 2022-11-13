

function Search({search,setSearch}) {
    
    
function handleSearch(e) {
    setSearch(e.target.value)
}


    return (
        <div>
            <input onChange={handleSearch} name="search" type="text" value={search}/>
        </div>
    )
}

export default Search;