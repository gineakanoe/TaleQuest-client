import React from 'react';
import './tales.css';
import CreateTale from './TalesCrud/CreateTale';
import DeleteTale from './TalesCrud/DeleteTale';
import GetTale from './TalesCrud/GetTale';
import UpdateTale from './TalesCrud/UpdateTale';

class Tales extends React.Component {

    render() {
        return(
            <div>
                Hello World!

                <CreateTale />

                <DeleteTale />

                <GetTale />

                <UpdateTale />
                
            </div>
        )
    }
}

export default Tales;   