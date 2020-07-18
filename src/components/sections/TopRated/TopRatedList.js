import React from 'react';
import MovieItem from '../../MovieItem/MovieItem';

const TopRatedList = (props) => {
    return (
        <div className="movies-wrapper">
            <header className="movies-header">
                <h2 className="movies__title">Top Rated Movies</h2>

                <p className="movies-link">{props.totalResults} results</p>
            </header>
            <ul className="movies-list">
                {props.topRatedInfo.map((pelicula) => (
                    <MovieItem data={pelicula} showModal={props.showModal} />
                ))}
            </ul>
        </div>
    );
};

export default TopRatedList;
