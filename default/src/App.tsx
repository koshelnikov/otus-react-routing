import React, {lazy, Suspense} from 'react';

import './App.css';
import {Main} from "./components/pages/main/main";
//import {About} from "./components/pages/about/about";
import {Header} from "./components/shared/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NotFound} from "./components/pages/404/404";
import {Posts} from "./components/pages/posts/posts";
import {Post} from "./components/pages/post/post";
import {PrivateRoute} from "./components/shared/route/private/private.route";


const About = lazy(() =>
    Promise.all([
        import ('./components/pages/about/about')
            .then(({About}) => ({default: About})),
        new Promise(res => {setTimeout(res, 5000)})
    ]).then(([exports]) => exports))

function App() {
  return (
      <div className="App">
          <Suspense fallback={<div>Please wait... The page is loading.</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Header/>}>
                        <Route index element={<Main/>}/>
                        <Route path='/about' element={<PrivateRoute><About/></PrivateRoute>}/>
                        <Route path='/posts' element={<Posts/>}/>
                        <Route path='/posts/:postId' element={<Post/>}/>
                    </Route>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
          </Suspense>
      </div>
  );
}

export default App;
