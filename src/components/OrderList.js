import React, { Component } from 'react'
import axios from 'axios'

export default class OrderList extends Component {

    state = {
        orders: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/order');
        this.setState({ orders : res.data });
        console.log(this.state.orders);
    }

    render() {
        return (
            <div className="container row">
                {
                    this.state.orders.map(order => 
                        <div className="card col-12 col-sm-6 col-md-3 m-3 p-0" key={order._id}>
                            <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{order.orderName}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">                                    
                                    <a href={"/order/" + order._id}>{order._id}</a>
                                </small>
                            </div>
                        </div>
                    )
                }
                
            </div>

        )
    }
}
