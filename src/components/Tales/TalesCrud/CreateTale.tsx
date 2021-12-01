import React from "react";
import APIURL from '../../../helpers/environment';

type TokenProps = {
    token: string | undefined | null,
}

type TaleCreate = {
    title: string
    entry: string,
    genre: string,
    keywords: string,
}

class CreateTale extends React.Component<TokenProps, TaleCreate> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            title: '',
            entry: '',
            genre: '',
            keywords: '',
        }
    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('submitted createTale event');
        fetch(`${APIURL}/tales/create`, {
        // fetch(`http://localhost:4000/tales/create`, {
            method: 'POST',
            body: JSON.stringify({
                tales: {
                    title: this.state.title,
                    entry: this.state.entry,
                    genre: this.state.genre,
                    keywords: this.state.keywords,
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
            alert('A Whole New Tale!  How Magical!');
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    render() {
        return(
            <div>
                <form>
                    <h3><u>A New Tale</u></h3>
                    <label htmlFor='title'>Title:</label>
                    <br/>
                    <input type='type' id='title' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>  
                    <br/>
                    <label htmlFor='genre'>Genre:</label>
                    <br/>
                    <input type='type' id='genre' value={this.state.genre} onChange={(e) => this.setState({genre: e.target.value})} />  
                    <br/>
                    <label htmlFor='keywords'>Keywords:</label>
                    <br/>
                    <input type='type' id='keywords' value={this.state.keywords} onChange={(e) => this.setState({keywords: e.target.value})} />  
                    <br/>
                    <label htmlFor='entry'>Entry:</label>
                    <br/>
                    <textarea id='entry' value={this.state.entry} onChange={(e) => this.setState({entry: e.target.value})} />
                    <br/>
                    <button type='submit' id='createTale' onClick={this.handleSubmit}>Submit</button>
                </form>
                <hr />
            </div>
        )
    }
}

export default CreateTale;