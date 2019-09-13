import React from 'react';
import useFetch from './components/useFetch';

const App = () => {
    const res = useFetch('https://simple-blog-api.crew.red/comments');
    if (!res.response) {
        return <div>Loading</div>;
    }
    return (
        <div className="App">
            <h1>List of Posts</h1>
            <div className="post-container">
                {res.response.map(post => (
                    <div key={post.id}>
                        <h3>{`#${post.id} ${post.title}`}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
