import React, { useContext } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';

const SearchBar = () => {
  const { setSearchQuery } = useContext(MovieContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="center-container">
      <Form inline className="search-form">
        <FormControl
          type="text"
          color='gray'
          placeholder="Search for movies..."
          className="search-input"
          onChange={handleSearch}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
