import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import {withRouter} from 'react-router-dom'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        console.log("inside delete");
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(){
        this.props.history.push(`/quickbooks/products`);
    }
    editEmployee(id){
        this.props.history.push(`/add-book/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            console.log(
                "res-->",res
            );
            this.setState({ employees: res.data});
        });
    }   

    addEmployee(){
        this.props.history.push('/products');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Books List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Book</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Id</th>
                                    <th> Title</th>
                                    <th> Description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> {employee.id}</td>
                                             <td> { employee.title} </td>   
                                             <td> {employee.description}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default withRouter(ListEmployeeComponent)
