import React, { Component } from 'react';
import dummyList from '../data/to_do_list';
import AddItem from './add_item';

class List extends Component {
    state = {
        list: []
    }

    getListData() {
        this.setState({
            list: dummyList
        });

    }

    componentDidMount() {
        this.getListData();
    }

    render() {
        

        const listElements = this.state.list.map((item, index)=> {
           
            return <li key={item._id}className="collection-item">{item.title}</li>;
        });

        return(
            <ul className="collection">
                {listElements}
                <AddItem/>
            </ul>
            
        )
    }
}

export default List;