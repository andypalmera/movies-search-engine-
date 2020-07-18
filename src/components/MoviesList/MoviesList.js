import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.css';
import MoviesHeader from '../MoviesHeader/MoviesHeader';

const MoviesList = (props) => {
    return (
        <div className="movies-wrapper">
            <MoviesHeader class="movies-header" categorie="Popular movies" path="/sections/Popular" />
            <ul className="movies-list">
                {props.popularInfo.slice(0, 5).map((pelicula, index) => (
                    <MovieItem data={pelicula} showModal={props.showModal} idNoShow={index === 4 ? 'quitar' : ''} />
                ))}
            </ul>
            <MoviesHeader class="movies-header" categorie="Top rated" path="/sections/TopRated" />

            <ul className="movies-list">
                {props.topRatedInfo.slice(0, 5).map((pelicula, index) => (
                    <MovieItem data={pelicula} showModal={props.showModal} idNoShow={index === 4 ? 'quitar' : ''} />
                ))}
            </ul>

            <MoviesHeader class="movies-header" categorie="Upcoming" path="/sections/UpComing" />

            <ul className="movies-list">
                {props.upComingInfo.slice(0, 5).map((pelicula, index) => (
                    <MovieItem data={pelicula} showModal={props.showModal} idNoShow={index === 4 ? 'quitar' : ''} />
                ))}
            </ul>
            <MoviesHeader class="movies-header" categorie="Now playing" path="/sections/NowPlaying" />

            <ul className="movies-list">
                {props.nowPlayingInfo.slice(0, 5).map((pelicula, index) => (
                    <MovieItem data={pelicula} showModal={props.showModal} idNoShow={index === 4 ? 'quitar' : ''} />
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;
