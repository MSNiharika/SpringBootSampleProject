import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

    // step 3
    componentDidMount(){
        debugger
        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            console.log("entered get emp");
            EmployeeService.getEmployees().then( (res) =>{
                
                let employee = res.data;
                console.log("res-->",employee);
                this.setState({id: employee.id,
                    title: employee.title,
                    description : employee.description,
                    isAvailable : employee.isAvailable
                });
            });
        }        
    }
    saveOrUpdateBook = (e) => {
        e.preventDefault();
        let book = {title: this.state.title, description: this.state.description, isAvailable: this.state.isAvailable};
        console.log('book => ' + JSON.stringify(book));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(book).then(res =>{
                this.props.history.push('/quickbooks/products');
            });
        }else{
            EmployeeService.updateEmployee(book).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeIsAvailableHandler= (event) => {
        this.setState({isAvailable: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book Details</h3>
        }else{
            return <h3 className="text-center">Update Book Details</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> IsAvailable: </label>
                                            <input placeholder="IsAvailable" name="isAvailable" className="form-control" 
                                                value={this.state.isAvailable} onChange={this.changeIsAvailableHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBook}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateBookComponent
