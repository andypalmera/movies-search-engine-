import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import svgs from './static/svgs.js';
import Search from './components/Search/Search';
import Modal from './components/Modal/Modal';
import NavDrawer from './components/NavDrawer/NavDrawer';

const key = 'e1cf51738011c844c19b7280544c45a8';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { href: '/sections/Popular', svg: () => <img className="svg" src={svgs.POPULAR} alt="popular-svg" />, span: 'POPULAR' },
                { href: '/sections/TopRated', svg: () => <img className="svg" src={svgs.TOP_RATED} alt="top-rated-svg" />, span: 'TOP RATED' },
                { href: '/sections/UpComing', svg: () => <img className="svg" src={svgs.UPCOMING} alt="upcoming-svg" />, span: 'UPCOMING' },
                { href: '/sections/NowPlaying', svg: () => <img className="svg" src={svgs.NOW_PLAYING} alt="now-playing-svg" />, span: 'NOW PLAYING' },
            ],
            popular: [],
            topRated: [],
            upComing: [],
            nowPlaying: [],
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
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieValue}`;
            const request = await fetch(url);
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

    popularInfo = async (e) => {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
        const request = await fetch(url);
        const response = await request.json();

        const movies = response.results;

        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            popular: movieList,
        });
    };
    upComingInfo = async (e) => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`;
        const request = await fetch(url);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            upComing: movieList,
        });
    };
    topRatedInfo = async (e) => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`;
        const request = await fetch(url);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            topRated: movieList,
        });
    };
    nowPlayingInfo = async (e) => {
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
        const request = await fetch(url);
        const response = await request.json();

        const movies = response.results;
        const movieList = [];

        movies.forEach((movie) => {
            movieList.push(movie);
        });
        this.setState({
            nowPlaying: movieList,
        });
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
        this.popularInfo();
        this.topRatedInfo();
        this.upComingInfo();
        this.nowPlayingInfo();
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
                {this.state.getInfoSearch === true && this.state.movies.length >= 0 ? (
                    <Search info={this.state.movies} value={this.state.value} totalResults={this.state.totalResults} />
                ) : (
                    <Main
                        popularInfo={this.state.popular}
                        topRatedInfo={this.state.topRated}
                        upComingInfo={this.state.upComing}
                        nowPlayingInfo={this.state.nowPlaying}
                        showModal={this.showModal}
                        mainFixed={this.state.showModal === true ? true : false}
                    />
                )}
            </div>
        );
    }
}

export default App;
