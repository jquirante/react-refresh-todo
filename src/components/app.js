import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item';
import dummyList from '../data/to_do_list';


class App extends Component { 

    state = {
        list: [],
    }

    getListData() {
        this.setState({
            list: dummyList,
        })
    }

    addItem = (item) => {

        console.log('ADD ITEM: ', item);
        this.setState({
            list: [item,...this.state.list]
        })
        
    }

    componentDidMount() {
        this.getListData();
    }

    render() {

        const { list } = this.state;

        return(
            <div className="container">
                <h1 className="center">To Do List</h1>
                <AddItem add={this.addItem}/>
                <List toDos={list}/>
            </div>
        )
    }
    
}

export default App;
