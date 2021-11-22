import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import Quests from "../Quests/Quests";
import Tales from "../Tales/Tales";

const Sidebar: React.FunctionComponent = () => {

    return(
        <div className='sidebar'>
            <div>
                <ul>
                    <li><Link to='/tales'>Tales</Link></li>
                    <li><Link to='quests'>Quests</Link></li>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path='/tales' element={<Tales />} />
                    <Route path='/quests' element={<Quests />} />
                </Routes>
            </div>

        </div>
    )
} 

export default Sidebar;

