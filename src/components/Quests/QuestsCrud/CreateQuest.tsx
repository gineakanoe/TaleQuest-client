import React from 'react';
// import APIURL from '../../../helpers/environment';

type TokenProps = {
    token: string | undefined | null,
}

type QuestCreate = {
    entry: string,
    type: string,
    timeLimit: string,
}

class CreateQuest extends React.Component<TokenProps, QuestCreate> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            entry: '',
            type: '',
            timeLimit: '',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        // e.preventDefault();
        console.log('submitted createQuest event');
        // fetch(`${APIURL}/quests/create`, {
        fetch(`http://localhost:4000/quests/create`, {        
            method: 'POST',
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
            console.log(data);
            alert('A Whole New Quest!  Get Your Pens Ready!');
        })
        .catch((err) => console.log(`[Error}: ${err}]`))
    }

    render() {
        return(
            <div>
                <form>
                    <h2>A New Quest</h2>
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
                    <button type='submit' id='createQuest' onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateQuest;