import React, { Component } from 'react'
import Todoitem from './Todoitem'


export default class Todolist extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit} = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Your todo list</h3>
                    {items.map(item => {
                        return(
                            <Todoitem key={item.id} 
                            title={item.title}
                            handleEdit={()=> handleEdit(item.id)}
                            handleDelete={()=> handleDelete(item.id)}
                            />
                        )
                    })}
                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-3" onClick={clearList}>clear list</button>
                </ul>
            </div>
        )
    }
}
