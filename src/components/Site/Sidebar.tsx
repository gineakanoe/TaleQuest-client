import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import './site.css';
import Quests from "../Quests/Quests";
import Tales from "../Tales/Tales";


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

                    <li><Link to='/tales'>Tales</Link></li>
                    <li><Link to='/quests'>Quests</Link></li>
                </ul>
            </div>
            <div>
                <Routes>

                    <Route path='/tales' element={<Tales token={this.props.token} />} />
                    <Route path='/quests' element={<Quests token={this.props.token} />} />
                </Routes>
            </div>

        </div>
    )
    }
} 

export default Sidebar;

