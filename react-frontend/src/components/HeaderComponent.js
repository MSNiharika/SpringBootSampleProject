import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:8083/quickbooks/products" className="navbar-brand">Book Management System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
