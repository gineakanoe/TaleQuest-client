import React from 'react';
// // import { Route, Routes, Link } from 'react-router-dom';
// // import Home from './Home';
// import Logout from '../Auth/AuthCrud/Logout';

// type TokenState = {
//     sessionToken: string | undefined | null,
//     // role: string | null,
// }
export default function NavBar() {
    return(
        <div>
            
        </div>
    )
}
// export default class NavBar extends React.Component<{}, TokenState> {
//     constructor(props: TokenState) {
//         super(props)
//         this.state = {
//             sessionToken: undefined,
//             // role: '',
//         }
//     }

//     clearLocalStorage = () => {
//         localStorage.clear();
//         this.setState({
//             sessionToken: undefined,
//             // role: '',
//         })
//     }
//     render() {
//         return(
//             <div>
//                 {/* <div>
//                     <Link to='/home'>Home</Link>
//                     <Routes>
//                         <Route path='/home' element={<Home token={this.state.sessionToken} />} />
//                     </Routes>
//                 </div> */}
//                 <Logout clearLocalStorage={this.clearLocalStorage}/>
//             </div>
//         )
//     }
// }