import React from 'react';
import MovieItem from '../../MovieItem/MovieItem';

const nowPlayingList = (props) => {
    return (
        <div className="movies-wrapper">
            <header className="movies-header">
                <h2 className="movies__title">Now Playing Movies</h2>

                <p className="movies-link">{props.totalResults} results</p>
            </header>

            <ul className="movies-list">
                {props.nowPlayingInfo.map((pelicula) => (
                    <MovieItem data={pelicula} showModal={props.showModal} />
                ))}
            </ul>
        </div>
    );
};

export default nowPlayingList;
