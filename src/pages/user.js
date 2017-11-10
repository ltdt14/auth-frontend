import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Link, { navigateTo } from 'gatsby-link';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// local imports
import { storageAvailable } from '../lib/storage';
import { apiBaseURL } from '../config';
import store from '../lib/store/dist/store.legacy';


// local components
import NewListForm from '../components/NewListForm';
import List from '../components/List';
import StylingOverrides from '../components/StylingOverrides';

// UIKit is undefined in static build
if (typeof UIkit.use === 'function') UIkit.use(Icons);

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


        /**
         * @typedef {Object} Action - define request actions to prevent typos
         * @type {{deleteListItem: string, deleteList: string, lists: string, createList: string, createItem: string}}
         */
        this.actions = {
            deleteListItem: 'deleteListItem',
            deleteList: 'deleteList',
            lists: 'lists',
            createList: 'createList',
            createItem: 'createItem'
        }
    }

    componentWillMount() {
        this.request({ action: this.actions.lists });
    }

    /**
     * @typedef {Object} Options - param for request method
     * @property {Action} action - decides which request to send
     */

    /**
     * Sends ajax request depending on action
     * @param {Options} options - options for the request
     * @param {*} data - The data if it's a post request
     */
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
                case this.actions.lists:
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
                case this.actions.createList:
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
                        this.request({ action: this.actions.lists }, null);
                    else
                        uikit.notification({
                            message: res.data.msg,
                            status: 'danger',
                            pos: 'top-center',
                            timeout: 3000
                        });
                    break;
                case this.actions.deleteListItem:
                    try {
                        res = await axios.post(
                            `${apiBaseURL}/deletelistitem`,
                            data,
                            authHeader
                        );
                    } catch (err) {
                        console.log(err);
                    }
                    this.request({ action: this.actions.lists });
                    break;
                case this.actions.deleteList:
                    try {
                        res = await axios.post(
                            `${apiBaseURL}/deletelist`,
                            { listid: data },
                            authHeader
                        );
                    } catch (err) {}
                    this.request({ action: this.actions.lists });
                    break;
                case this.actions.createItem:
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
                        this.request({ action: this.actions.lists });
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

    /**
     * Deletes token and navigates to index
     */
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
                                                action: this.actions.createList
                                            },
                                            data
                                        )}
                                />
                            </div>
                            <List
                                lists={this.state.lists}
                                onDeleteList={listid =>
                                    this.request(
                                        { action: this.actions.deleteList },
                                        listid
                                    )}
                                onDeleteItem={data =>
                                    this.request(
                                        { action: this.actions.deleteListItem },
                                        data
                                    )}
                                onSubmitNewItem={data =>
                                    this.request(
                                        { action: this.actions.createItem },
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
