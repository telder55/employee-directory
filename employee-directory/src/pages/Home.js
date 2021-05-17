import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import EmployeeTable from "../components/EmployeeTable";

class Home extends Component {
  state = {
    employees: [],
  };

  // When the component mounts, load array of employees
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getRandomUsers()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
        console.log(this.state.employees);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Employees</h1>
        {this.state.employees.length > 0 && (
          <EmployeeTable
            first={this.state.employees[0].name.first}
            last={this.state.employees[0].name.last}
            image={this.state.employees[0].picture.large}
            phone={this.state.employees[0].phone}
            email={this.state.employees[0].email}
          />
        )}
      </div>
    );
  }
}

export default Home;

// {this.state.employees.map((employee) => {})}
