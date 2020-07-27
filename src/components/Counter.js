import React, { Component } from 'react';
import axios from 'axios';

export default class Counter extends Component {

    state = {
        id: null,
        counter: []
    }

    constructor(props) {
        super(props);
        const id = props.match.params["id"];
        this.state = { id: id }
        console.log(props);
        this.modifyCount = this.modifyCount.bind(this);
        this.generateCounterQR = this.generateCounterQR.bind(this);
    }

    async componentDidMount() {
        console.log(this.state.id)
        const res = await axios.get("http://localhost:4000/counter/" + this.state.id);
        this.setState({ counter: res.data });
    }

    async modifyCount(sign) {
        if(this.state.counter) {
            this.setState({count: sign ? this.state.counter.count++ : this.state.counter.count--});
        }        
        // console.log(this.state.counter);
        const res = await axios.put("http://localhost:4000/counter/" + this.state.id, this.state.counter);
        // console.log(res);
    }

    async generateCounterQR() {
        console.log("object")
        const res = await axios.post("http://localhost:4000/counter/generateQR/" + this.state.id);
        console.log(res)
    }

    render() {
        if (this.state.counter) {
        return (
            <div>
                <div className="card col-8 my-3 mx-auto p-4 text-center" key={this.state.counter._id}>
                    <div className="card-body">
                        <div>
                            <h5 className="card-title">{this.state.counter.counterName}</h5>
                            <h4 className="card-text">Cuenta actual</h4>
                            <h1 className="card-text">{this.state.counter.prefix + this.state.counter.count.toString() + this.state.counter.sufix}</h1>
                        </div>
                        <div className="d-flex justify-content-around">
                            <button className="btn btn-danger" style={{height: '4rem', width: '4rem', fontSize: '2rem'}}
                            onClick={() => this.modifyCount(false)}>
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-success" style={{height: '4rem', width: '4rem', fontSize: '2rem'}}
                            onClick={() => this.modifyCount(true)}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <button className="btn btn-info m-4" onClick={() => this.generateCounterQR()}>GENERAR QR</button>
                            <br/>
                            <img src={"http://localhost:4000/public/images/" + this.state.counter._id + '.png'} alt=""/>
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
