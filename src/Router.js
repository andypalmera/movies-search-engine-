import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Popular from './components/sections/Popular/Popular';
import App from './App';
import TopRated from './components/sections/TopRated/TopRated';
import UpComing from './components/sections/Upcoming/UpComing';
import NowPlaying from './components/sections/NowPlaying/NowPlaying';
// import Modal from './components/Modal/Modal';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/sections/Popular" component={Popular} />
                <Route path="/sections/TopRated" component={TopRated} />
                <Route path="/sections/UpComing" component={UpComing} />
                <Route path="/sections/NowPlaying" component={NowPlaying} />
                {/* <Route path="/Movie" component={Modal} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
