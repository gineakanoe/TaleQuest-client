import React, { ReactElement, ReactNode } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/Site/Header';
import Sidebar from './components/Site/Sidebar';
import Footer from './components/Site/Footer';
import Auth from './components/Auth/Auth';
import Tales from './components/Tales/Tales';
import Quests from './components/Quests/Quests';

function Heading({title}: {title: string}) {
    return <h1>{title}</h1>
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement {
    return <h3>{children}</h3>
}

type TokenState = {
    sessionToken: string,
    user: {},
}

class MainApp extends React.Component<{}, TokenState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            sessionToken: '',
            user: {},
        }
        this.updateToken = this.updateToken.bind(this);
        this.setUser = this.setUser.bind(this);
        this.clearToken = this.clearToken.bind(this);
    }
    
    updateToken(newToken: string) {
        localStorage.setItem('token', newToken);
        this.setState({sessionToken: newToken})
    }

    setUser(userRole: string) {
        localStorage.setItem('userRole', userRole);
        this.setState({user: userRole})
    }

    clearToken() {
        localStorage.clear();
        this.setState({sessionToken: ''})
    }
    
    // viewConductor = () => {
    //     return (sessionToken !== undefined ? <Sidebar sessionToken={this.sessionToken} /> : <Auth updateLocalStorage={updateLocalStorage} />) ;
    // };


App: React.FunctionComponent = () => {
    //protected views -->
    return (
        <div className="App">
            {/* <Auth updateToken={this.updateToken} setUser={this.setUser} /> */}
            <Auth />
            <MainApp />

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
}

export default MainApp;
