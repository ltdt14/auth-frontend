import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ListBody extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
    }

    renderItem(listitem) {
        return (
            <tr key={listitem['_id']}>
                <td>
                    {listitem.name}
                </td>
                <td>
                    <button
                        className="uk-float-right"
                        type="button"
                        data-uk-icon="icon: trash"
                        onClick={() => {
                            this.onDeleteItem(listitem['_id']);
                        }}
                    />
                </td>
            </tr>
        );
    }

    onDeleteItem(itemid) {
        this.props.onDeleteItem(itemid);
    }

    render() {
        return (
            <tbody>
                {this.props.items.map(this.renderItem)}
            </tbody>
        );
    }
}

export default ListBody;
