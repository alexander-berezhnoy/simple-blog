import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// import useFetch from './components/useFetch';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Spinner from './components/Spinner';
import ErrorBoundary from './components/ErrorBoundary';

const HomePage = lazy(() => import('./containers/HomePage'));
const PostPage = lazy(() => import('./containers/PostPage'));

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/posts/:postId" component={PostPage} />
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </>

    );
};

export default App;
