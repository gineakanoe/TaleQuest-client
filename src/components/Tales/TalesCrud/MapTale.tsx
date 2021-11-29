import React from 'react';
import { CardGroup, Card } from 'reactstrap';

type TaleProps = {
    entry: string,
    genre: string,
    keywords: string,
    tales: []
}

const MapTale = (props: any) => {
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
                            </Card>
                    </CardGroup>
                </div>
            )
        })
    )
}

export default MapTale;