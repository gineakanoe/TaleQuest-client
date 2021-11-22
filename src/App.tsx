import React from 'react';
import './App.css';
import Tales from './components/Tales/Tales';
import Quests from './components/Quests/Quests';

function App() {
    return (
        <div className="App">
            <Tales />
            <br/>
            <Quests />
        </div>
    );
}

export default App;
