import React from 'react';
import MovieItem from '../../MovieItem/MovieItem';
import './PopularList.css';

const PopularList = (props) => {
    return (
        <div className="movies-wrapper">
            <header className="movies-header">
                <h2 className="movies__title">Popular Movies</h2>

                <p className="movies-link">{props.totalResults} results</p>
            </header>
            <ul className="movies-list">
                {props.popularInfo.map((pelicula) => (
                    <MovieItem data={pelicula} showModal={props.showModal} />
                ))}
            </ul>
        </div>
    );
};
export default PopularList;
