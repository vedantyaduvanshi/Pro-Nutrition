import React from 'react';
import './search.css'; 

const Search = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
