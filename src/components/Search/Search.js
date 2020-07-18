import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import Modal from '../Modal/Modal';
import NavDrawer from '../NavDrawer/NavDrawer';
import './Search.css';
import Header from '../Header/Header';

const key = 'e1cf51738011c844c19b7280544c45a8';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.value,
            data: props.info,
            show: true,
            showModal: false,
            modalTitle: '',
            modalURLImage: '',
            modalOverview: '',
            modalBackdrop: '',
            modalId: '',
            modalGender: '',
            modalDate: '',
            showNavDrawer: false,
            totalResults: props.totalResults,
            // movies: movieList,
            // value: props.value,
            // getInfoSearch: true,
            watch: false,
            watchToggle: true,
            value: '',
        };
    }
    onChangeName = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    getInfo = async (e) => {
        e.preventDefault();

        const movieValue = this.state.value;

        if (movieValue.length > 0) {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieValue}`;
            const request = await fetch(url);
            const response = await request.json();
            const movies = response.results;
            const movieList = [];
            this.setState({
                data: '',
            });
            if (movies.length >= 0) {
                movies.forEach((movie) => {
                    movieList.push(movie);
                });

                this.setState({
                    data: movieList,
                    // getInfoSearch: true,
                    totalResults: response.total_results,
                    watch: !this.state.watch,
                    watchToggle: !this.state.watchToggle,
                    value: '',
                });
            } else {
            }
        }
    };

    paginaActual = 2;

    loadMore = async (e) => {
        const pagina = this.paginaActual++;
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.state.title}&page=${pagina}`;

        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;

        if (movies.length <= 19) {
            this.setState({
                show: false,
            });
        }
        const moviesList = this.state.data;

        if (movies) {
            movies.forEach((movie) => {
                moviesList.push(movie);
            });
            this.setState({
                data: moviesList,
            });
        }
    };
    showModal = (e, backdrop, overview, id, gender, date) => {
        this.setState({
            showModal: true,
            modalTitle: e.target.alt,
            modalURLImage: e.target.src,
            modalBackdrop: backdrop,
            modalOverview: overview,
            modalId: id,
            modalGender: gender,
            modalDate: date,
        });
    };
    hideModal = () => {
        this.setState({
            showModal: false,
        });
    };
    toggleNavDrawer = () => {
        this.setState({
            showNavDrawer: !this.state.showNavDrawer,
        });
    };
    componentDidMount() {
        if (this.state.data.length < 19) {
            this.setState({
                show: false,
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.showModal === true ? (
                    <Modal
                        backdrop={this.state.modalBackdrop}
                        modalURLImage={this.state.modalURLImage}
                        modalTitle={this.state.modalTitle}
                        modalGender={this.state.modalGender}
                        modalDate={this.state.modalDate}
                        modalOverview={this.state.modalOverview}
                        modalId={this.state.modalId}
                        hideModal={this.hideModal}
                    />
                ) : (
                    <div style={{ display: 'none' }}> </div>
                )}
                {this.state.showNavDrawer === true ? <NavDrawer datos={this.state.data} /> : <div style={{ display: 'none' }}> </div>}

                <Header
                    getInfo={this.getInfo}
                    onChangeName={this.onChangeName}
                    value={this.state.value}
                    showNavDrawer={this.toggleNavDrawer}
                    NavDrawerIcon={this.state.showNavDrawer}
                />
                <section className="main">
                    {this.state.showModal === true ? (
                        <Modal
                            backdrop={this.state.modalBackdrop}
                            modalURLImage={this.state.modalURLImage}
                            modalTitle={this.state.modalTitle}
                            modalGender={this.state.modalGender}
                            modalDate={this.state.modalDate}
                            modalOverview={this.state.modalOverview}
                            modalId={this.state.modalId}
                            hideModal={this.hideModal}
                        />
                    ) : (
                        <div style={{ display: 'none' }}> </div>
                    )}
                    {this.state.showNavDrawer === true ? <NavDrawer datos={this.state.data} /> : <div style={{ display: 'none' }}> </div>}

                    <section className="home">
                        <section className="home-header">
                            <div className="movies-wrapper">
                                {this.state.data.length > 0 ? (
                                    <div>
                                        <header className="movies-header">
                                            <h2 className="movies__title">Search results</h2>

                                            <div className="movies-link">{this.state.totalResults} results</div>
                                        </header>

                                        <ul className="movies-list">
                                            {this.state.data.map((pelicula) => (
                                                <MovieItem data={pelicula} showModal={this.showModal} watch={this.state.watch} />
                                            ))}
                                        </ul>
                                        {this.state.show === true ? (
                                            <div className="movies-nav">
                                                <button onClick={() => this.loadMore()}>LOAD MORE</button>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="not-found">
                                        <p>Nothing found</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        );
    }
}

export default Search;
