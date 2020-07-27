import React, { Component } from 'react'
import axios from 'axios';

export default class CounterCreate extends Component {

    initialState = {
        business: 'empresa',
        counterName: '',
        initialValue: 0,
        resetValue: 0,
        prefix: '',
        sufix: '',
        active: true
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target)
        console.log(event.target.value)
    }

    async onSubmit(event) {
        
        event.preventDefault();
        const res = await axios.post('http://localhost:4000/counter', this.state);
        console.log(res.data.status);
        
    }

    render() {
        return (
            <div className="container p-3">
                <div className="row">
                    <div className="row col-9 mx-auto">
                    <div className="card p-3">
                        <h1 className="card-title mx-auto my-3">NUEVO CONTADOR</h1>
                        <form className="mt-4" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="counterName">Nombre</label>
                                <input type="text" value={this.state.counterName} onChange={this.handleChange} name="counterName" className="form-control" id="name" placeholder="Ingresa un nombre" />
                                <small id="name" className="form-text text-muted">El nombre debe ser lo más descriptivo posible, para diferenciarse del resto.</small>
                            </div>
                            <div className="form-group">
                                <label for="initialValue">Valor inicial</label>
                                <input type="number" value={this.state.initialValue} onChange={this.handleChange} name="initialValue" className="form-control" id="initialValue" />
                            </div>
                            <div className="form-group">
                                <label for="resetValue">Valor de reinicio (Opcional)</label>
                                <input type="number" value={this.state.resetValue} onChange={this.handleChange} name="resetValue" className="form-control" id="resetValue" />
                                <small id="name" className="form-text text-muted">Indicar el valor máximo del contador</small>
                            </div>
                            <div className="form-group">
                                <label for="prefix">Prefijo (Opcional)</label>
                                <input type="text" value={this.state.prefix} onChange={this.handleChange} name="prefix" className="form-control" id="prefix" placeholder="Ingresa un prefijo" />
                            </div>
                            <div className="form-group">
                                <label for="sufix">Sufijo (Opcional)</label>
                                <input type="text" value={this.state.sufix} onChange={this.handleChange} name="sufix" className="form-control" id="sufix" placeholder="Ingresa un sufijo" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" value={this.state.active} onChange={this.handleChange} name="active" className="form-check-input" id="active" />
                                <label className="form-check-label" for="active">Activo</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Aceptar</button>
                        </form>
                    </div>
                    <div className="col-3 text-center card">
                        <h1>{this.state.prefix + this.state.initialValue.toString() + this.state.sufix}</h1>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
