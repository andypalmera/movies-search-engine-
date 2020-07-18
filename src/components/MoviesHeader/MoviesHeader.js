import React from 'react';
import './MoviesHeader.css';

const MoviesHeader = (props) => {
    return (
        <header className="movies-header">
            <h2 className="movies__title">{props.categorie} Movies</h2>

            <a href={props.path} className="movies-link">
                View All
            </a>
        </header>
    );
};

export default MoviesHeader;
