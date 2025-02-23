import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Beeper</Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/createUser">Crear Usuario<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createOrder">Crear Orden</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orderList">Ordenes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/order">Orden</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counters">Contadores</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
