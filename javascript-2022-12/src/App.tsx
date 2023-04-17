import React, {lazy, Suspense} from 'react';

import './App.css';
import {Main} from "./components/main/main";
import {About} from "./components/about/about";
import {BrowserRouter, createBrowserRouter, Route, Routes}
    from "react-router-dom";

import {Layout} from "./layout";
import {NotFound} from "./components/not-found/not-found";
//import {Posts} from "./components/posts/posts";
import {Post} from "./components/post/post";


/*
const router = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        children: [
            {
                path: '/', element: <Main/>,
            },
            {
                path: '/about', element: <About/>
            }
        ]
    }
    ]
)

function App() {
    return <RouterProvider router={router} />
}

 */

const Posts = lazy(() =>
    Promise.all(
        [
            import('./components/posts/posts')
                .then(({Posts}) => ({default: Posts})),
            new Promise(res => {setTimeout(res, 5000)})])
        .then(([exports]) => exports));

        //.then((module) => module))


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Suspense fallback={<div>Page is loading...</div>}>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/' element={<Main/>} />
                        <Route path='/post/:postId' element={<Post/>} />
                        <Route path='/posts' element={<Posts/>} />
                        <Route path='/about' element={<About/>} />
                    </Route>
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
