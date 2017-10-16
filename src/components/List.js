import React, { Component } from 'react';

import NewItemForm from './NewItemForm';
import ListBody from './ListBody';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        };

        this.renderLists = this.renderLists.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onDeleteList = this.onDeleteList.bind(this);
        this.handleOnSubmitNewItemChange = this.handleOnSubmitNewItemChange.bind(
            this
        );
    }

    handleOnSubmitNewItemChange(itemname, listid) {
        this.props.onSubmitNewItem({ itemname, listid });
    }

    renderLists(list) {
        return (
            <div className="uk-width-1-2@s">
                <div className="uk-tile uk-tile-default uk-padding-medium uk-box-shadow-medium">
                    <h3>
                        {list.name}
                    </h3>
                    <NewItemForm
                        onSubmitNewItem={itemname =>
                            this.handleOnSubmitNewItemChange(
                                itemname,
                                list['_id']
                            )}
                    />
                    <table
                        key={list.name}
                        className="uk-table uk-table-middle uk-table-divider">
                        <ListBody
                            items={list.items}
                            onDeleteItem={itemid =>
                                this.onDeleteItem(list['_id'], itemid)}
                        />
                    </table>
                    <button
                        className="uk-float-right uk-button uk-button-danger"
                        type="button"
                        onClick={() => {
                            this.onDeleteList(list['_id']);
                        }}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }

    onDeleteList(listid) {
        this.props.onDeleteList(listid);
    }

    onDeleteItem(listid, itemid) {
        this.props.onDeleteItem({ itemid, listid });
    }

    render() {
        return (
            <div className="uk-grid-small" data-uk-grid>
                {this.props.lists.map(this.renderLists)}
            </div>
        );
    }
}

export default List;
