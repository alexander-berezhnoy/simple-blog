import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import useFetch from './components/useFetch';
import HomePage from './containers/HomePage';
import PostPage from './containers/PostPage';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/posts" component={PostPage} />
        </Switch>
    );
};

export default App;
