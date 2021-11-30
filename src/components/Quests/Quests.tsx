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
                Hello World from Quest Land!

                <CreateQuest token={this.props.token} />
                <QuestIndex token={this.props.token} />                
            </div>
        )
    }
}

export default Quests;
