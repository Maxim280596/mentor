import React from 'react';

function SearchInput() {
    return (
        <div className='input-field col s12'>
            <input type='search' id='search-field' placeholder='search' />
            <button
                className='btn blue-grey'
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            >
                Search
            </button>
        </div>
    );
}

export default SearchInput;
