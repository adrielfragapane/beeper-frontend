import React, { Component } from 'react'
import axios from 'axios'

export default class Order extends Component {


    state = {
        id: null,
        order: []
    }

    constructor(props) {
        super(props);
        const id = props.match.params["id"];
        this.state = { id: id }
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:4000/order/" + this.state.id);
        this.setState({ order: res.data });
    }

    getColor(state) {
        console.log(state)
        switch(state) {
            case 1: return '#007bff';
            case 2: return '#28a745';
            default: return '#ffc107';
        }
    }

    render() {

        if (this.state.order) {
            return (
                // <div className="m-0 p-3" id="container" style={{background: this.getColor(this.state.order.state)}}>
                <div className="m-0 p-3" id="container" style={{
                    display : 'grid',
                    height: '100vh',
                    justifyContent: 'center',
                    background: this.getColor(this.state.order.state)}}>  
                    <div className="text-center">
                        <img style={this.img} src="https://via.placeholder.com/150" alt="Card image cap" />
                    
                        <h1 className="display-6">{this.state.order.business}</h1>
                        <h4 className="display-4">{this.state.order.orderName}</h4>
                        <p>Tu pedido está siendo preparado, te avisaremos cuando esté listo</p>
                    </div>
                    
                    
                    
                </div>


            )
        }
        else {
            return (<div>CARGANDO</div>)
        }

        
    }

    container = {
        display : 'grid',
        height: '100vh',
        justifyContent: 'center'
    };

    img = {
        borderRadius: '50%',
        margin: '3em',
        height: '200px',
        widht: '200px'
    }

}
