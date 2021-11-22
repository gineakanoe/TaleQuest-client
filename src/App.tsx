import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Router/Sidebar';
import Auth from './components/Auth/Auth';
import Tales from './components/Tales/Tales';
import Quests from './components/Quests/Quests';

const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <Auth />
            <br />
            <Tales />
            <br/>
            <Quests />
            <Router>
                <Sidebar />
            </Router>
        </div>
    );
}

export default App;
