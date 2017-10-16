import React, { Component } from 'react';
import Link from 'gatsby-link';
import CSS from 'uikit/dist/css/uikit.css';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div``;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitProp({email: this.state.email, password: this.state.password});
    }

    render() {
        return (
            <Wrapper>
                <form className="uk-grid-small" data-uk-grid>
                    <div className="uk-width-1-3@s">
                        <input
                            className="uk-input"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            placeholder="Email"
                            type="text"
                        />
                    </div>
                    <div className="uk-width-1-3@s">
                        <input
                            className="uk-input"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div className="uk-width-1-3@s">
                        <button
                            className="uk-button uk-button-primary uk-width-1-1"
                            type="submit"
                            onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                </form>
                <p>{this.props.msg}</p>
            </Wrapper>
        );
    }
}

export default Login;
