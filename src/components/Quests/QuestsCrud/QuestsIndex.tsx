import React from 'react';
import APIURL from '../../../helpers/environment';
import { CardGroup, Card, Button } from 'reactstrap';

type TokenProps = {
    token: string | undefined | null,
}

type QuestGet = {
    entry: string,
    type: string,
    timeLimit: string,
    quests: QuestDetails[],
    id: string,
    update: boolean,
}

//? QuestDetails is for 'mapQuest'
type QuestDetails = {
    entry: string,
    type: string,
    timeLimit: string,
    id: string,
}

class GetQuest extends React.Component<TokenProps, QuestGet> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            entry: '',
            type: '',
            timeLimit: '',
            quests: [],
            id: '',
            update: false, 
        }
    }

    myQuests = () => {
        fetch(`${APIURL}/quests/mine`, {
        // fetch(`http://localhost:4000/quests/mine`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                quests: data,
                id: data.id,
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    componentDidMount() {
        this.myQuests();
    }

    deleteQuest = (id: any) => {
        alert('Quest Deleted');
        fetch(`${APIURL}/quests/delete/${id}`, {
        // fetch(`http://localhost:4000/quests/delete/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(() => this.myQuests())
    }

    updateQuest = (id: any) => {
        alert('An Update! An Update has been done!')
        fetch(`${APIURL}/quests/update/${id}`, {
        // fetch(`http://localhost:4000/quests/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                quests: {
                    entry: this.state.entry,
                    type: this.state.type,
                    timeLimit: this.state.timeLimit,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({
                entry: data.entry,
                type: data.type,
                timeLimit: data.timeLimit,
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    mapQuest = (props: any) => {
        // console.log(props);
        return(
            props.quests.map((quests: QuestDetails, index: number) => {
                return(
                    <div>
                        <CardGroup key={index}>
                                <Card className={'card'}>
                                    <p><b>{quests.entry}</b></p>
                                    <p><b><i>Type: </i></b>{quests.type}</p>
                                    <p><b><i>Time Limit: </i></b>{quests.timeLimit}</p>
                                    <Button onClick={() => this.setState({update: !this.state.update})}>Update</Button>
                                    <Button onClick={() => this.deleteQuest(quests.id)} >Delete</Button>   
                                    {this.state.update ? (
                                        <div>
                                        <form onSubmit={() => this.updateQuest(quests.id)}>
                                            <h2>Update Quest</h2>
                                            <label htmlFor='type'>Type:</label>
                                            <br/>
                                            <input type='type' id='type' value={this.state.type} onChange={(e) => this.setState({type: e.target.value})} />  
                                            <br/>
                                            <label htmlFor='timeLimit'>Time Limit:</label>
                                            <br/>
                                            <input type='type' id='timeLimit' value={this.state.timeLimit} onChange={(e) => this.setState({timeLimit: e.target.value})} />  
                                            <br/>
                                            <label htmlFor='entry'>Entry:</label>
                                            <br/>
                                            <textarea id='entry' value={this.state.entry} onChange={(e) => this.setState({entry: e.target.value})} />
                                            <br/>
                                            <button type='submit'>Submit</button>
                                        </form>
                                        </div>
                                    ): null }
                                </Card>
                        </CardGroup>
                    </div>
                )
            })
        )
    }

    render() {
        return(
            <div>
                <h3><u>My Quests</u></h3>
                <this.mapQuest entry={this.state.entry} type={this.state.type} timeLimit={this.state.timeLimit} quests={this.state.quests} />
            </div>
        )
    }
}

export default GetQuest;