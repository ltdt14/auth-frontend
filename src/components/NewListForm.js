import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NewListForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listname: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitNewList(this.state.listname);
    }

    render() {
        return (
            <form method="post" className="uk-grid-small" data-uk-grid onSubmit={this.handleSubmit}>
                <div className="uk-width-3-4@s">
                    <input
                        className="uk-input"
                        value={this.state.listname}
                        onChange={this.handleChange}
                        name="listname"
                        placeholder="Listname"
                        type="text"
                    />
                </div>
                <div className="uk-width-1-4@s">
                    <button
                        data-uk-icon="icon: plus"
                        className="uk-button uk-button-primary uk-width-1-1"
                        type="submit">
                    </button>
                </div>
            </form>
        )
    }
}

export default NewListForm;