import React from 'react';
import MapTale from './MapTale';

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

    render() {
        return(
            <div>
                <h3><u>My Tales</u></h3>
                <MapTale entry={this.state.entry} genre={this.state.genre} keywords={this.state.keywords} tales={this.state.tales} />
            </div>
        )
    }
}


export default GetTale;