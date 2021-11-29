import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';


type TokenProps = {
    token: string | undefined | null,
}

type TaleUpdate = {
    entry: string,
    genre: string,
    keywords: string,
    sessionToken?: string,
    modalOpen: boolean,
}

class UpdateTale extends React.Component<TokenProps, TaleUpdate> {

    constructor(props: TokenProps) {
        super(props)
        this.state = {
            entry: '',
            genre: '',
            keywords: '',
            sessionToken: '',
            modalOpen: false,
        }
    }

    componentDidMount() {

    }

    handleSubmit = (e: React.MouseEvent) => {
        // e.preventDefault();
        console.log('An Update! An Update has been done!')
        fetch(`https://localhost:4000/tales/update/:entryId`, {
            method: 'PUT',
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

    // //! Toggle Not Working
    // toggleModal = () => {
    //     this.setState({
    //         modalOpen: !false
    //     })
    // }

    render() {
        return(
            <div>
                {/* <button onClick={this.toggleModal}>Edit</button>
                <Modal modalOpen={false}> */}
                <Form>
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
                </Form>
            {/* </Modal> */}
            </div>
        )
    }
}

export default UpdateTale;