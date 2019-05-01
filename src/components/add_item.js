import React, { Component } from 'react';

class AddItem extends Component {
    render() {
        return(
            <form>
                <div className="row">
                    <div className="input-field col s8 offset-s2">
                        <input type="text" name="title" autoComplete="off" />
                        <label>Title</label>
                    </div>
                    <div className="input-field col s8 offset-s2">
                        <input type="text" name="details" autoComplete="off" />
                        <label>Details</label>
                    </div>
                </div>
                <h1>Add Item</h1>
            </form>
            
        )
        
    }
}

export default AddItem;