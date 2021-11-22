import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/Site/Header';
import Sidebar from './components/Site/Sidebar';
import Footer from './components/Site/Footer';
// import Auth from './components/Auth/Auth';
// import Tales from './components/Tales/Tales';
// import Quests from './components/Quests/Quests';

const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <Header />
            
            <Router>
                <Sidebar />
            </Router>

            <Footer />
        </div>
    );
}

export default App;
