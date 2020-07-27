import React, { Component } from 'react'
import axios from 'axios'

export default class CounterList extends Component {
    
    state = {
        counters: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/counter');
        this.setState({ counters : res.data });
        console.log(this.state.counters);
    }

    render() {
        return (
            <div>

                <button className="btn btn-info m-3" onClick={() => this.props.history.push("/createCounter")} >Nuevo contador</button>

                <div className="container row">
                    {
                        this.state.counters.map(counter => 
                            <div className="card col-12 col-sm-6 col-md-3 m-3 p-0 text-center" key={counter._id}>
                                <div className="card-body">
                                    <h5 className="card-title">{counter.counterName}</h5>
                                    <h4 className="card-text">Cuenta actual</h4>
                        <h1 className="card-text">{counter.prefix + counter.count.toString() + counter.sufix}</h1>
                                </div>
                                <div className="card-footer d-flex justify-content-around">
                                    <small className="text-muted">                                    
                                        <a href={"/counter/" + counter._id}>EDITAR</a>
                                    </small>
                                    <small className="text-muted">                                    
                                        <a href={"/viewCounter/" + counter._id}>VER</a>
                                    </small>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        )
    }
}
