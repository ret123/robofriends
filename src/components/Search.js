import React from 'react'

const Search =  ({onSearchChange}) => {
  return (
    <div>
      <div>
        <input 
            type="search"
            className="pa3 ba b--green bg-lightest-blue"
            placeholder= 'search robots'
            onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
export default Search;
