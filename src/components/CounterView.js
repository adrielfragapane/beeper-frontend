import React, { Component } from 'react';
import axios from 'axios';

export default class CounterView extends Component {

    state = {
        id: null,
        counter: []
    }

    constructor(props) {
        super(props);
        const id = props.match.params["id"];
        this.state = { id: id }
        console.log(props);
    }

    async componentDidMount() {
        console.log(this.state.id)
        const res = await axios.get("http://localhost:4000/counter/" + this.state.id);
        this.setState({ counter: res.data });
    }

    render() {
        if (this.state.counter) {
        return (
            <div className="bg-info p-4" style={{height: '100vh'}}>
                <div className="card col-8 mx-auto p-4 " key={this.state.counter._id}>
                    <div className="card-body ">
                        <div className="text-center">
                            <h2 className="card-title">{this.state.counter.counterName}</h2>
                            <h4 className="card-text">TURNO ACTUAL</h4>
                            <div className="card col-6 mx-auto p-4 my-4 bg-info">
                                <h1 className="card-text">{this.state.counter.prefix + this.state.counter.count.toString() + this.state.counter.sufix}</h1>
                            </div>
                            
                            <img src="http://localhost:4000/public/images/Adriel.png" alt=""/>

                        </div>


                        <form className="mt-4" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="number">Su turno</label>
                                <input type="number" value={this.state.number} onChange={this.handleChange} name="number" className="form-control" id="number" placeholder="Ingrese su numero" />
                                <small id="name" className="form-text text-muted">El nombre debe ser lo más descriptivo posible, para diferenciarse del resto.</small>
                            </div>
                            
                            
                        </form>
                        <div className="text-center">
                            <h1>{"00:45:00"}</h1>
                            </div>
                        
                    </div>


                    
                    <div className="card-footer">
                        <small className="text-muted">
                            <a href={"/counter/" + this.state.counter._id}>CONFIGURAR</a>
                        </small>
                    </div>
                </div>
            </div>
        )}
        else {
            return (<div>CARGANDO</div>)
        }
    }
}
