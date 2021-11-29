import React from 'react';
import { CardGroup, Card, Button } from 'reactstrap';
// import MapTale from './MapTale';


type TokenProps = {
    token: string | undefined | null,
}

type TaleGet = {
    entry: string,
    genre: string,
    keywords: string,
    tales: TaleDetails[]
}

type TaleDetails = {
    entry: string,
    genre: string,
    keywords: string,
}

type TaleProps = {
    entry: string,
    genre: string,
    keywords: string,
    tales: []
}

class GetTale extends React.Component<TokenProps, TaleGet> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            entry: '',
            genre: '',
            keywords: '',
            tales: [],
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
                tales: data
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    componentDidMount() {
        this.myTales()
    }

    mapTale = (props: any) => {
        // console.log(props);
    
        return(
            props.tales.map((tales: TaleProps, index: number) => {
                return(
                    <div>
                        <CardGroup key={index}>
                                <Card className={'card'}>
                                    <h3><u>Title Goes Here</u></h3>
                                    <p><b>{tales.entry}</b></p>
                                    <p><b><i>Genre: </i></b>{tales.genre}</p>
                                    <p><b><i>Keywords: </i></b>{tales.keywords}</p>
                                    <Button>Update</Button>
                                    <Button>Delete</Button>
                                    
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
                
            </div>
        )
    }
}


export default GetTale;