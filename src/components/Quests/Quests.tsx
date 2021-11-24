import React from 'react';
import './quests.css';
import CreateQuest from './QuestsCrud/CreateQuest';
import DeleteQuest from './QuestsCrud/DeleteQuest';
import GetQuest from './QuestsCrud/GetQuest';
import UpdateQuest from './QuestsCrud/UpdateQuest';

type TokenProps = {
    token: string | undefined | null,
}

class Quests extends React.Component<TokenProps, {}> {

    constructor(props: TokenProps) {
        super(props)
        this.state = 
        {

        }
    }

    render() {
        return(
            <div>
                Hello World from Quest Land!

                <CreateQuest token={this.props.token} />

                <DeleteQuest token={this.props.token} />

                <GetQuest token={this.props.token} />

                <UpdateQuest token={this.props.token} />
                
            </div>
        )
    }
}

export default Quests;
