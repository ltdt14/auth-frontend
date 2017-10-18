import React, { Component } from 'react';
import { browserHistory } from 'react-router';
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
import NewListForm from '../components/NewListForm';
import List from '../components/List';
import StylingOverrides from '../components/StylingOverrides';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

// define request actions to prevent typos
const actions = {
    deleteListItem: 'deleteListItem',
    deleteList: 'deleteList',
    lists: 'lists',
    createList: 'createList',
    createItem: 'createItem'
};

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listname: '',
            token: '',
            msg: ''
        };

        this.request = this.request.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        this.request({ action: actions.lists });
    }

    request(options, data) {
        const authHeader =
            typeof window !== 'undefined'
                ? {
                      headers: {
                          Authorization: getToken()
                      }
                  }
                : {};

        function getToken() {
            return storageAvailable('sessionStorage')
                ? window.sessionStorage.getItem('token')
                : store.get('token');
        }

        (async () => {
            let res;

            switch (options.action) {
                case actions.lists:
                    try {
                        res = await axios.get(
                            `${apiBaseURL}/lists`,
                            authHeader
                        );
                    } catch (err) {
                        navigateTo('/401');
                    }
                    this.setState({ lists: res.data });
                    break;
                case actions.createList:
                    try {
                        res = await axios.post(
                            `${apiBaseURL}/createlist`,
                            { name: data },
                            authHeader
                        );
                    } catch (err) {
                        console.log(err);
                    }
                    if (res.data.success)
                        this.request({ action: actions.lists });
                    else
                        uikit.notification({
                            message: res.data.msg,
                            status: 'danger',
                            pos: 'top-center',
                            timeout: 3000
                        });
                    break;
                case actions.deleteListItem:
                    try {
                        res = await axios.post(
                            `${apiBaseURL}/deletelistitem`,
                            data,
                            authHeader
                        );
                    } catch (err) {
                        console.log(err);
                    }
                    this.request({ action: actions.lists });
                    break;
                case actions.deleteList:
                    try {
                        res = await axios.post(
                            `${apiBaseURL}/deletelist`,
                            { listid: data },
                            authHeader
                        );
                    } catch (err) {}
                    this.request({ action: actions.lists });
                    break;
                case actions.createItem:
                    try {
                        res = await axios.post(
                            `${apiBaseURL}/createlistitem`,
                            data,
                            authHeader
                        );
                    } catch (err) {
                        UIkit.notification(err.message);
                    }
                    if (res.data.success)
                        this.request({ action: actions.lists });
                    else
                        UIkit.notification({
                            message: res.data.msg,
                            status: 'danger',
                            pos: 'top-center',
                            timeout: 3000
                        });
            }
        })();
    }

    logout() {
        window.sessionStorage.setItem('token', '');
        storageAvailable('sessionStorage')
            ? window.sessionStorage.setItem('token', '')
            : store.remove('token');
        navigateTo('/');
    }

    render() {
        return (
            <div>
                <StylingOverrides>
                    <div
                        className="uk-sticky uk-tile uk-tile-primary uk-padding-small uk-box-shadow-medium"
                        data-uk-sticky="bottom: 0">
                        <button
                            className="uk-button uk-button-default uk-float-right"
                            onClick={this.logout}>
                            Logout
                        </button>
                    </div>
                    <section
                        className="uk-section uk-section-muted uk-preserve-color uk-cover-container"
                        data-uk-height-viewport="offset-bottom: 0">
                        <div className="uk-container uk-container-small">
                            <div className="uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium uk-margin-bottom">
                                <NewListForm
                                    onSubmitNewList={data =>
                                        this.request(
                                            {
                                                action: actions.createList
                                            },
                                            data
                                        )}
                                />
                            </div>
                            <List
                                lists={this.state.lists}
                                onDeleteList={listid =>
                                    this.request(
                                        { action: actions.deleteList },
                                        listid
                                    )}
                                onDeleteItem={data =>
                                    this.request(
                                        { action: actions.deleteListItem },
                                        data
                                    )}
                                onSubmitNewItem={data =>
                                    this.request(
                                        { action: actions.createItem },
                                        data
                                    )}
                            />
                        </div>
                    </section>
                </StylingOverrides>
            </div>
        );
    }
}

export default User;
