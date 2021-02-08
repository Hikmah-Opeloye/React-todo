import React, { Component } from 'react'

export default class Todoinput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props

        return (
            <div className="card card-body m-2">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className={editItem ?"input-group-text bg-success text-white":"input-group-text bg-primary text-white"}>
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize"  placeholder="add an item" value={item} onChange={handleChange}/>
                    </div>
                    <button type="submit" className={editItem ? "btn btn-block btn-success mt-3 text-capitalize" : "btn btn-block btn-primary mt-3 text-capitalize" }>
                    {editItem ? <span><i className="fas fa-edit"></i> update item</span> :<span><i class="fas fa-shopping-cart"></i> add item</span>}
                    </button>
                </form>
            </div>
        )
    }
}
