import React from 'react';
import './App.css';
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
        </div>
    );
}

export default App;
