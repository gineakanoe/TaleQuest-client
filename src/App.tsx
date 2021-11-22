import React, { ReactElement, ReactNode } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/Site/Header';
import Sidebar from './components/Site/Sidebar';
import Footer from './components/Site/Footer';
// import Auth from './components/Auth/Auth';
// import Tales from './components/Tales/Tales';
// import Quests from './components/Quests/Quests';

function Heading({title}: {title: string}) {
    return <h1>{title}</h1>
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement {
    return <h3>{children}</h3>
}

const App: React.FunctionComponent = () => {
    // sessionToken: string,

    // constructor(sessionToken: string,) {
    //     this.state = {
    //         sessionToken: '',
    //     }
    // }

    // componentDidMount() {
    //     if (localStorage.getItem('sessionToken')){
    //         this.setState.sessionToken(localStorage.getItem('sessionToken'));
    //     }
    // }

    return (
        <div className="App">
            <Header />
            
            <Heading title='Welcome to TaleQuest'></Heading>
            <HeadingWithContent>Pull up a chair to the fire and jot down some mythical dreams!</HeadingWithContent>

            <Router>
                <Sidebar />
            </Router>

            <Footer />
        </div>
    );
}

export default App;
