import React from 'react';
import Nav from '../containers/Nav'
import Main from './Main'
import '../index.css' 

const App = () => (
    <div>
        <Nav />
        <div className="mx-auto text-center">
            <Main/>
        </div>
    </div>
)


export default App