import React from 'react';
import './tales.css';
import CreateTale from './TalesCrud/CreateTale';
import TalesIndex from './TalesCrud/TalesIndex';

type TokenProps = {
    token: string | undefined | null,
}
class Tales extends React.Component<TokenProps, {}> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <h2 className='talequest'>
                    As is a tale, so is life: not how long it is, but how good it is, is what matters.
                    <br />
                    ― Lucius Annaeus Seneca
                </h2>
                <CreateTale token={this.props.token}/>
                <TalesIndex token={this.props.token}/>                
            </div>
        )
    }
}

export default Tales;   