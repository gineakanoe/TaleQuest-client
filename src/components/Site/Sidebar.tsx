import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import './site.css';
// import Home from './Home';
import Quests from '../Quests/Quests';
import Tales from '../Tales/Tales';


type TokenProps = {
    token: string | undefined | null,
}

class Sidebar extends React.Component<TokenProps, {}> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {

        }
    }

    render() {
    return(
        <div className='sidebar'>
            <div>
                <ul id='sidebarUl'>
                    {/* <li><Link to='/'>Home</Link></li> */}
                    <li><Link to='/tales' className='link-li'>Tales</Link></li>
                    <li><Link to='/quests' className='link-li'>Quests</Link></li>
                </ul>
            </div>
            <div>
                {/* Routes is the updated version of Switch */}
                <Routes>
                    {/* <Route path='/' element={<Home token={this.props.token} />} /> */}
                    <Route path='/tales' element={<Tales token={this.props.token} />} />
                    <Route path='/quests' element={<Quests token={this.props.token} />} />
                </Routes>
            </div>

        </div>
    )
    }
} 

export default Sidebar;

