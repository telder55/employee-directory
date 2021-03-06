import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "../components/EmployeeTable";
import SearchForm from "../components/SearchForm";
import SortButton from "../components/SortButton";

class Home extends Component {
  state = {
    employees: [],
    search: "",
    results: [],
  };

  // When the component mounts, load array of employees
  componentDidMount() {
    this.loadUsers();
  }

  handleInputChange = (event) => {
    if (event.target.value.length < 1) {
      this.loadUsers();
    }
    this.setState({ search: event.target.value });
  };

  loadUsers = () => {
    API.getRandomUsers()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ employees: this.filterEmployees(this.state.search) });
  };

  handleButtonClick = () => {
    const employees = this.state.employees;
    const employeeSorted = employees.sort((empA, empB) =>
      empA.name.first > empB.name.first ? 1 : -1
    );
    this.setState({ employees: employeeSorted });
  };

  filterEmployees = (query) => {
    return this.state.employees.filter(
      (employee) =>
        employee.name.first.includes(query) ||
        employee.name.last.includes(query)
    );
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Employees</h1>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          employees={this.state.employees}
        />
        <SortButton handleButtonClick={this.handleButtonClick} />
        <EmployeeTable list={this.state.employees} />
      </div>
    );
  }
}

export default Home;
