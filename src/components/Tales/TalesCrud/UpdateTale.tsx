import React from 'react';

type TaleUpdate = {
    entry: string,
    genre: string,
    keywords: string,
    sessionToken?: string,
}

class UpdateTale extends React.Component<{}, TaleUpdate> {

    constructor(props: {}) {
        super(props)
        this.state = {
            entry: '',
            genre: '',
            keywords: '',
            sessionToken: '',
        }
    }

    componentDidMount() {

    }

    handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        fetch(`https://localhost:4000/tales/update`, {
            method: 'PUT',
            body: JSON.stringify({
                entry: '',
                genre: '',
                keywords: '',
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.sessionToken}`
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
                    <h2>Update Tale</h2>
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

export default UpdateTale;