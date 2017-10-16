import React, { Component } from 'react';
import { browserHistory, history } from 'react-router';
import Link, { navigateTo } from 'gatsby-link';
import CSS from 'uikit/dist/css/uikit.css';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { themeVariables } from '../themeVariables';
import { apiBaseURL } from '../config';
import axios from 'axios';

import Login from '../components/Login';

const Wrapper = styled.div`
    .uk-section-primary {
        background: #92b4a7;
    }

    .uk-section {
        padding-top: 200px;
    }

    .uk-button-primary {
        background-color: #92b4a7;
        color: #fff;
        border: 1px solid transparent;
    }

    .uk-button-primary:hover,
    .uk-button-primary:focus {
        background-color: #8cada0;
        color: #fff;
    }

    .uk-input,
    .uk-select,
    .uk-textarea {
        border: 1px solid #333;
    }
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };
    }

    request(data) {
        (async () => {
            let res;
            try {
                res = await axios.post(`${apiBaseURL}/login`, data);
            } catch (err) {
                this.setState({
                    msg: 'Server not responding. Please try again later'
                });
            }
            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                navigateTo('/user');
            } else {
                this.setState({ msg: res.data.msg });
            }
        })();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <script src="js/jquery.min.js" />
                    <script src="js/uikit.min.js" />
                    <script src="js/uikit-icons.min.js" />
                </Helmet>
                <ThemeProvider theme={themeVariables}>
                    <Wrapper>
                        <section
                            className="uk-section uk-section-primary uk-preserve-color uk-cover-container"
                            data-uk-height-viewport="offset-bottom: 0">
                            <div className="uk-container uk-container-small">
                                <div className="uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium uk-margin-bottom">
                                    <Login
                                        onSubmitProp={data =>
                                            this.request(data)}
                                        msg={this.state.msg}
                                    />
                                </div>
                            </div>
                        </section>
                    </Wrapper>
                </ThemeProvider>
            </div>
        );
    }
}

export default Home;
