import React from 'react';
import { CardGroup, Card, Button } from 'reactstrap';

type TokenProps = {
    token: string | undefined | null,
}

type TaleGet = {
    entry: string,
    genre: string,
    keywords: string,
    tales: TaleDetails[],
    id: string,
    update: boolean,
}

//? TaleDetails is for 'mapTale'
type TaleDetails = {
    entry: string,
    genre: string,
    keywords: string,
    id: string,
}

class GetTale extends React.Component<TokenProps, TaleGet> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            entry: '',
            genre: '',
            keywords: '',
            tales: [],
            id: '',
            update: false,
        }
    }

    myTales = () => {
        fetch(`http://localhost:4000/tales/mine`, {
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
                tales: data,
                id: data.id,
            })
            // console.log(data[0].id);
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    componentDidMount() {
        this.myTales();
    } 

    deleteTale = (id: any) => {
        alert('Entry Deleted');
        // console.log(id);
        fetch(`http://localhost:4000/tales/delete/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(() => this.myTales())
    }

    updateTale = (id: any) => {
        alert('An Update! An Update has been done!')
        fetch(`http://localhost:4000/tales/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                tales: {
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
            // console.log(data);
            this.setState({
                entry: data.entry,
                genre: data.genre,
                keywords: data.keywords,
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }  

    mapTale = (props: any) => {
        // console.log(props);
        return(
            props.tales.map((tales: TaleDetails, index: number) => {
                return(
                    <div>
                        <CardGroup key={index}>
                                <Card className={'card'}>
                                    <h3><u>Title Goes Here</u></h3>
                                    <p><b>{tales.entry}</b></p>
                                    <p><b><i>Genre: </i></b>{tales.genre}</p>
                                    <p><b><i>Keywords: </i></b>{tales.keywords}</p>
                                    {/* <p><b><i>id: </i></b>{tales.id}</p> */}
                                    <Button onClick={() => this.setState({update: !this.state.update})}>Update</Button>
                                    <Button onClick={() => this.deleteTale(tales.id)} >Delete</Button>   
                                    {this.state.update ? (
                                        <div>
                                        <form onSubmit={() => this.updateTale(tales.id)}>
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
                <h3><u>My Tales</u></h3>
                <this.mapTale entry={this.state.entry} genre={this.state.genre} keywords={this.state.keywords} tales={this.state.tales} />
                {/* <this.updateTale /> */}
            </div>
        )
    }
}


export default GetTale;