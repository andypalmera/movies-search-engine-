import React from 'react';
import Nav from '../../Nav/Nav';
import Header from '../../Header/Header';
import NowPlayingList from './NowPlayingList';
import svgs from '../../../static/svgs';
import Search from '../../Search/Search';
import Modal from '../../Modal/Modal';
import NavDrawer from '../../NavDrawer/NavDrawer';

const key = 'e1cf51738011c844c19b7280544c45a8';
class NowPlaying extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: '/sections/Popular', svg: () => <img className="svg" src={svgs.POPULAR} alt="popular-svg" />, span: 'POPULAR' },
                { href: '/sections/TopRated', svg: () => <img className="svg" src={svgs.TOP_RATED} alt="top-rated-svg" />, span: 'TOP RATED' },
                { href: '/sections/UpComing', svg: () => <img className="svg" src={svgs.UPCOMING} alt="upcoming-svg" />, span: 'UPCOMING' },
                { href: '/sections/NowPlaying', svg: () => <img className="svg" src={svgs.NOW_PLAYING} alt="now-playing-svg" />, span: 'NOW PLAYING' },
            ],
            nowPlaying: [],
            show: true,
            movies: [],
            getInfoSearch: false,
            value: '',
            showModal: false,
            modalTitle: '',
            modalURLImage: '',
            modalOverview: '',
            modalBackdrop: '',
            modalId: '',
            modalGender: '',
            modalDate: '',
            showNavDrawer: false,
            totalResults: '',
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
            const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieValue}`;
            const request = await fetch(URL);
            const response = await request.json();
            const movies = response.results;
            const movieList = [];
            if (movies.length >= 0) {
                movies.forEach((movie) => {
                    movieList.push(movie);
                });
                this.setState({
                    movies: movieList,
                    getInfoSearch: true,
                    totalResults: response.total_results,
                });
            } else {
            }
        }
    };

    NowPlayingInfo = async (e) => {
        const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;

        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            nowPlaying: movieList,
            totalResults: response.total_results,
        });
    };

    paginaActual = 2;

    loadMore = async (e) => {
        const pagina = this.paginaActual++;
        const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${pagina}`;

        const request = await fetch(URL);
        const response = await request.json();

        const movies = response.results;

        if (movies.length < 20) {
            this.setState({
                show: false,
            });
        }

        if (movies) {
            movies.forEach((movie) => {
                this.state.nowPlaying.push(movie);
            });
            this.setState({
                nowPlaying: this.state.nowPlaying,
            });
        }
    };
    showModal = (e, backdrop, overview, id, gender, date, image) => {
        this.setState({
            showModal: true,
            modalTitle: e.target.alt,
            modalURLImage: image,
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
        this.NowPlayingInfo();
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
                <Nav datos={this.state.data} />
                <Header getInfo={this.getInfo} onChangeName={this.onChangeName} showNavDrawer={this.toggleNavDrawer} NavDrawerIcon={this.state.showNavDrawer} />
                {this.state.getInfoSearch === true ? (
                    <Search info={this.state.movies} value={this.state.value} totalResults={this.state.totalResults} />
                ) : (
                    <section className="main">
                        <section className="home">
                            <section className="home-header">
                                <NowPlayingList nowPlayingInfo={this.state.nowPlaying} showModal={this.showModal} totalResults={this.state.totalResults} />
                                {this.state.show ? (
                                    <div className="movies-nav">
                                        <button onClick={() => this.loadMore()}>LOAD MORE</button>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </section>
                        </section>
                    </section>
                )}
            </div>
        );
    }
}

export default NowPlaying;
