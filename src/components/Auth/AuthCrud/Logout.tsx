import React from 'react';

class Logout extends React.Component {

    handleSubmit = (e: React.MouseEvent) => {
        localStorage.setItem('sessionToken', '');
        console.log(`sessionToken --> ${localStorage.sessionToken}`);
        // tokenChecker();
    }

    render() {
        return(
            <div>
                <button type='submit' id='logout' onClick={this.handleSubmit}>Logout</button>
            </div>
        )
    }
}

export default Logout;