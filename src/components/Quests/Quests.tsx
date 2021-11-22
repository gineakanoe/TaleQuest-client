import React from 'react';
import './quests.css';
import CreateQuest from './QuestsCrud/CreateQuest';
import DeleteQuest from './QuestsCrud/DeleteQuest';
import GetQuest from './QuestsCrud/GetQuest';
import UpdateQuest from './QuestsCrud/UpdateQuest';

class Quests extends React.Component {

    render() {
        return(
            <div>
                Hello World from Quest Land!

                <CreateQuest />

                <DeleteQuest />

                <GetQuest />

                <UpdateQuest />
                
            </div>
        )
    }
}

export default Quests;
