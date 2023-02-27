import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8083/quickbooks/products";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(book){
        return axios.post(EMPLOYEE_API_BASE_URL, book);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(book){
        return axios.put(EMPLOYEE_API_BASE_URL + '/', book);
    }

    deleteEmployee(book){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + book);
    }
}

export default new EmployeeService()