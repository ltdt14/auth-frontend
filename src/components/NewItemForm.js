import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NewItemForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemname: ''
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
        this.props.onSubmitNewItem(this.state.itemname);
    }

    render() {
        return (
            <form className="uk-grid-small" data-uk-grid>
                <div className="uk-width-3-4@s">
                    <input
                        className="uk-input"
                        value={this.state.itemname}
                        onChange={this.handleChange}
                        name="itemname"
                        placeholder="Item name"
                        type="text"
                    />
                </div>
                <div className="uk-width-1-4@s">
                    <button
                        data-uk-icon="icon: plus"
                        className="uk-button uk-button-primary uk-width-1-1"
                        type="submit"
                        onClick={this.handleSubmit}>
                    </button>
                </div>
            </form>
        )
    }
}

export default NewItemForm;