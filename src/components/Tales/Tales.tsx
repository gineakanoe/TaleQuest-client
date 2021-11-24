import React from 'react';
import './tales.css';
import CreateTale from './TalesCrud/CreateTale';
import DeleteTale from './TalesCrud/DeleteTale';
import GetTale from './TalesCrud/GetTale';
import UpdateTale from './TalesCrud/UpdateTale';

type TokenProps = {
    token: string | undefined | null,
}
class Tales extends React.Component<TokenProps, {}> {

    constructor(props: TokenProps) {
        super(props)
        this.state = 
        {

        }
    }

    render() {
        return(
            <div>
                Hello World of Tales!

                <CreateTale token={this.props.token}/>

                <DeleteTale token={this.props.token}/>

                <GetTale token={this.props.token}/>

                <UpdateTale token={this.props.token}/>
                
            </div>
        )
    }
}

export default Tales;   