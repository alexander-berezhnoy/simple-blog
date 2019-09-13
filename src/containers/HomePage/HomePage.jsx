import React from 'react';

const HomePage = () => <h1>HomePage</h1>;
// const res = useFetch('https://simple-blog-api.crew.red/posts');
// if (!res.response) {
//     return <div>Loading</div>;
// }
// return (
//     <div className="App">
//         <h1>List of Posts</h1>
//         <div className="post-container">
//             {res.response.map(post => (
//                 <div key={post.id}>
//                     <h3>{`#${post.id} ${post.title}`}</h3>
//                     <p>{post.content ? post.content : post.body}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
// );
export default HomePage;
