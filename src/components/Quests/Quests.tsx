import React from 'react';
import './quests.css';
import CreateQuest from './QuestsCrud/CreateQuest';
import QuestIndex from './QuestsCrud/QuestsIndex';

type TokenProps = {
    token: string | undefined | null,
}

class Quests extends React.Component<TokenProps, {}> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <h2 className='talequest'>
                    “Say it, reader. Say the word 'quest' out loud. It is an extraordinary word, isn't it? So small and yet so full of wonder, so full of hope.”
                    <br/>
                    ― Kate DiCamillo, The Tale of Despereaux
                </h2>

                <CreateQuest token={this.props.token} />
                <QuestIndex token={this.props.token} />                
            </div>
        )
    }
}

export default Quests;
