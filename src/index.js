import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Games from './components/Games';
import Header from './components/Header';
import Streams from './components/Streams';
import GameStreams from './components/GameStreams';
import Embed from './components/Embed';
import ReactDOM from 'react-dom';
import './stylesheet.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


function App() {


    return (
        
    <Router>

        <div className="App container-fluid">
       
       <Header />

    <Route exact path="/" component={Games} />
    <Route exact path="/top-streams" component={Streams} />
    <Route exact path="/game/:id" component={GameStreams} />
    <Route exact path="/embed/:channel" component={Embed} />
    
    

    </div>


    </Router>

    );
}


ReactDOM.render(<App />, document.getElementById('root'));



