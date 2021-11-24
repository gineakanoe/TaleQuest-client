import React from 'react';

type SessionProps = {
    clearLocalStorage: () => void,
}

class Logout extends React.Component<SessionProps> {

    constructor(props: SessionProps) {
        super(props)
        this.state = {

        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        console.log('Logout Called');
        this.props.clearLocalStorage();
       
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