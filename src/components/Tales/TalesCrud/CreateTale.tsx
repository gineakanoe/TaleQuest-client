import React from "react";
import { Token } from "typescript";

type TokenProps = {
    token: string | undefined | null,
}

type TaleCreate = {
    entry: string,
    genre: string,
    keywords: string,
}

class CreateTale extends React.Component<TokenProps, TaleCreate> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            entry: '',
            genre: '',
            keywords: '',
        }
    }

    componentDidMount() {

    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        fetch(`https://localhost:4000/tales/create`, {
            method: 'POST',
            body: JSON.stringify({
                entry: '',
                genre: '',
                keywords: '',
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                entry: data.entry,
                genre: data.genre,
                keywords: data.keywords,
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    render() {
        return(
            <div>
                <form>
                    <h2>A New Tale</h2>
                    <label htmlFor='title'>Title:</label>
                    <br/>
                    <input type='type' id='title' />  
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
            </div>
        )
    }
}

export default CreateTale;