import React from 'react';
import {CardGroup,CardBody,  } from 'reactstrap';

type TokenProps = {
    token: string | undefined | null,
}

type TaleGet = {
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
                entry: data.entry,
                genre: data.genre,
                keywords: data.keywords,
            })
        })
        .catch((err) => console.log(`[Error]: ${err}`))
    }

    componentDidMount() {
        this.myTales()
    }

    render() {

        //return props.bucketList.map((bucketList, index) => {
        return(
            <div>
                <h3>My Tales</h3>
                <hr />
                <CardGroup>
                    <CardBody>
                        {this.state.entry}
                        {this.state.genre}
                        {this.state.keywords}
                        
                    </CardBody>
                </CardGroup>
            </div>
        )
    }
}

export default GetTale;