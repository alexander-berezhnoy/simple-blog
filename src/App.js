import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';


import HomePage from './containers/HomePage';
import PostPage from './containers/PostPage';


const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/posts" component={PostPage} />
                </ErrorBoundary>
            </Switch>
        </>

    );
};

export default App;
