import React from 'react';
import dummyList from '../data/to_do_list';


const List = (props) => {

    const listElements = props.toDos.map((item, index)=> {
        return <li key={item._id} className="collection-item">{item.title}</li>;
    });

    return(
        <ul className="collection">
            {listElements}
        </ul>
    )
    
}

export default List;