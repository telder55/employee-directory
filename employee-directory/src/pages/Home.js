import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Home extends Component {
  state = {
    employees: [],
  };

  // When the component mounts, load array of employees
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getRandomUser()
      .then((res) =>
        this.setState({
          employees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Employees</h1>
        <h3 className="text-center">View Employees below</h3>
        <Card image={this.state.image} />
      </div>
    );
  }
}

export default Home;
