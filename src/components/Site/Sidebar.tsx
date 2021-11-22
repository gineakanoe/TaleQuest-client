import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import './site.css';
import Quests from "../Quests/Quests";
import Tales from "../Tales/Tales";
import Auth from '../Auth/Auth';

const Sidebar: React.FunctionComponent = () => {

    return(
        <div className='sidebar'>
            <div>
                <ul id='sidebarUl'>
                    <li><Link to='/auth'>Login/Register/Logout</Link></li>
                    <li><Link to='/tales'>Tales</Link></li>
                    <li><Link to='quests'>Quests</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/tales' element={<Tales />} />
                    <Route path='/quests' element={<Quests />} />
                </Routes>
            </div>

        </div>
    )
} 

export default Sidebar;

