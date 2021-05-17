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
        <EmployeeTable list={this.state.employees} />
      </div>
    );
  }
}

export default Home;
