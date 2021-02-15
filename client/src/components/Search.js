import React, { useState } from 'react';
import Countries from './Countries';

function Search() {
  const [search, setSearch] = useState('united kingdom');
  let textInput = React.createRef();

  function handleSearchClick() {
    setSearch(textInput.current.value);
  }

  return (
    <div className="formSearchContainer d-flex flex-column align-items-center my-5">
      <div className="input-group mb-5 w-75">
        <input
          className="form-control p-4"
          type="text"
          placeholder="Search for a Country..."
          maxLength="50"
          ref={textInput}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              handleSearchClick();
            }
          }}
        />

        <div className="input-group-append">
          <button
            className="btn btn-info text-white"
            type="submit"
            onClick={handleSearchClick}
          >
            <i className="fas fa-search mx-3"></i>
          </button>
        </div>
      </div>
      <div>
        <Countries name={search} />
      </div>
    </div>
  );
}

export default Search;
