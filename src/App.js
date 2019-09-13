import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import useFetch from './components/useFetch';
import HomePage from './containers/HomePage';
import PostPage from './containers/PostPage';

import GlobalStyle from './GlobalStyle';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/posts" component={PostPage} />
            </Switch>
        </>

    );
};

export default App;
