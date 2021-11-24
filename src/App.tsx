import React, { ReactElement, ReactNode } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/Site/Header';
import Sidebar from './components/Site/Sidebar';
import Footer from './components/Site/Footer';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/AuthCrud/Logout';
// import Tales from './components/Tales/Tales';
// import Quests from './components/Quests/Quests';

function Heading({title}: {title: string}) {
    return <h1>{title}</h1>
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement {
    return <h3>{children}</h3>
}

type TokenState = {
    sessionToken: string | undefined | null,
    // role: string | null,
}

class App extends React.Component<{}, TokenState> {

    constructor(props: TokenState) {
        super(props)
        this.state = {
            sessionToken: undefined,
            // role: '',
        }
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
    }
    
    componentDidMount = (() => {
        if(localStorage.getItem('token')) {
            this.setState({
                sessionToken: localStorage.getItem('token'),
                // role: localStorage.getItem('role'),

            })
        }
    })    

    updateLocalStorage = (newToken: string) => {    
        localStorage.setItem('token', newToken);
        this.setState({
            sessionToken: newToken,
        })
    }

    // updateRole = (role: string) => {
    //     localStorage.setItem('role', role);
    //     this.setState({role: role})
    // }

    clearLocalStorage = () => {
        localStorage.clear();
        this.setState({
            sessionToken: undefined,
            // role: '',
        })
    }
    
    viewConductor = () => {
        return(
            this.state.sessionToken !== undefined ? 
            <Sidebar /*userRole={this.state.role} sessionToken={this.state.sessionToken} clearLocalStorage={this.clearLocalStorage}*/ /> : 
            <Auth /*updateRole={this.updateRole}*/ updateLocalStorage={this.updateLocalStorage} clearLocalStorage={this.clearLocalStorage} />
        )
    }


// App: React.FunctionComponent = () => {
//     //protected views -->
//     return (
//         <div className="App">
//             <MainApp />

//             <Header />
            
//             <Heading title='Welcome to TaleQuest'></Heading>
//             <HeadingWithContent>Pull up a chair to the fire and jot down some mythical dreams!</HeadingWithContent>

//             <Router>
//                 {/* <Sidebar /> */}
//                 {this.viewConductor()}
//             </Router>

//             <Footer />
//         </div>
//     );
// }

    render() {
        return(
            <div className="App">
                <Header />
            
                <Heading title='Welcome to TaleQuest'></Heading>
                <HeadingWithContent>Pull up a chair to the fire and jot down some mythical dreams!</HeadingWithContent>

                <Router>
                    {/* <Sidebar /> */}
                    {this.viewConductor()}
                </Router>

                <Logout clearLocalStorage={this.clearLocalStorage}/>

                <Footer />
        </div>
        )
    }
}

export default App;
