import React from 'react';

type TokenProps = {
    token: string | undefined | null,
}

class DeleteTale extends React.Component<TokenProps, {}> {

    handleSubmit = (e: React.MouseEvent) => {
        // e.preventDefault();
        console.log('Deleted')
        fetch(`https://localhost:4000/tales/delete/:id`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            })
        })
        .then(() => {})
    }

    render() {
        return(
            <div>
                <button type='submit' id='deleteTale' onClick={this.handleSubmit}>Delete</button>
            </div>
        )
    }
}

export default DeleteTale;