import React, { Component } from 'react';
import { browserHistory, history } from 'react-router';
import Link, { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import store from '../lib/store/dist/store.legacy';

// local imports
import { storageAvailable } from '../lib/storage';
import { apiBaseURL } from '../config';

// local components
import Login from '../components/Login';
import StylingOverrides from '../components/StylingOverrides';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

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
                if (typeof window !== 'undefined') {
                    if (storageAvailable('sessionStorage')) {
                        window.sessionStorage.setItem('token', res.data.token);
                    } else {
                        store.set('token', res.data.token);
                    }
                    navigateTo('/user');
                }
            } else {
                this.setState({ msg: res.data.msg });
            }
        })();
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <StylingOverrides>
                    <section
                        className="uk-section uk-section-primary uk-preserve-color uk-cover-container"
                        data-uk-height-viewport="offset-bottom: 0">
                        <div className="uk-container uk-container-small">
                            <div className="uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium uk-margin-bottom">
                                <Login
                                    onSubmitProp={data => this.request(data)}
                                    msg={this.state.msg}
                                />
                            </div>
                        </div>
                    </section>
                </StylingOverrides>
            </div>
        );
    }
}

export default Home;
