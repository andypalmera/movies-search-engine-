import React from 'react';
import './MovieItem.css';
import imagenes from '../../static/imagenes/no-image.png';

class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.data.poster_path,
            noImage: imagenes,
            title: props.data.original_title,
            backdrop: `https://image.tmdb.org/t/p/w1280${props.data.backdrop_path}`,
            overview: props.data.overview,
            id: props.data.id,
            gender: props.data.genre_ids,
            date: props.data.release_date,
            idNoShow: props.idNoShow,
            imageSizes: ['w185', 'w500'],
        };
    }

    render() {
        console.log(this.state.backdrop);
        return (
            <li className="movies-item" id={this.state.idNoShow}>
                <a
                    href="#"
                    className="movies-item-link"
                    onClick={(e) => {
                        this.props.showModal(e, this.state.backdrop, this.state.overview, this.state.id, this.state.gender, this.state.date, this.state.image);
                    }}
                >
                    <figure className="movies-item-poster">
                        {this.state.image ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w780${this.state.image}`}
                                alt={this.state.title + 'poster'}
                                className="movies-item-poster-image"
                            />
                        ) : (
                            <img src={this.state.noImage} alt="popular-svg" style={{ width: 185 }} />
                        )}
                    </figure>
                    <div className="movie-item-content">
                        <p className="movie-item-title">{this.state.title}</p>
                    </div>
                </a>
            </li>
        );
    }
}

export default MovieItem;
