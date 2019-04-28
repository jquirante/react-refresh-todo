import React, { Component } from 'react';
import dummyList from '../data/to_do_list';

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
            </ul>
            
        )
    }
}

export default List;