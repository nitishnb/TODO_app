
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

export default class HomeTodo extends Component {
    render(){
        return(
            <div align="center">
                <h3>
                    Welcome! To my first MERN APP
                </h3>
                <div class="spinner-grow text-muted"></div>
                <div class="spinner-grow text-primary"></div>
                <div class="spinner-grow text-success"></div>
                <div class="spinner-grow text-info"></div>
                <div class="spinner-grow text-warning"></div>
                <div class="spinner-grow text-danger"></div>
                <div class="spinner-grow text-secondary"></div>
                <div class="spinner-grow text-dark"></div>
                <div class="spinner-grow text-light"></div>
                <div class="container p-3 my-3 bg-dark text-white">
                    <div class="btn-group btn-group-lg">
                    <Link to="/view" class="btn btn-primary">Todos</Link>
                    <Link to="/create" class="btn btn-primary">Create Todo</Link>
                    </div>
                </div>
            </div>
        )
    }
}