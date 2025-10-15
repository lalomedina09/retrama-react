import React, { useState } from 'react';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchClose = () => {
        console.log('Búsqueda cerrada');
        // Lógica para cerrar la búsqueda
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Búsqueda:', searchQuery);
        // Lógica de búsqueda
    };

    return (
        <div className="popup-search-box d-none d-lg-block">
            <button className="searchClose" onClick={handleSearchClose}>
                <i className="fal fa-times"></i>
            </button>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">
                    <i className="fal fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchBox;