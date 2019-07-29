import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import data from "./data/data";
import "bootstrap/dist/css/bootstrap.css";
// class component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  handleDelete(index) {
    const arr = this.state.property.index;
    const newIndex = this.state.property.index + 1;
    arr.splice(index, 1);
    this.setState({
      properties: arr,
      property: data.properties[newIndex]
    });
  }

  render() {
    const { properties, property } = this.state;
    return (
      <div className="App">
        <div class="btn-group" role="group">
          <button
            class="btn btn-outline-dark btn-lg"
            onClick={() => this.prevProperty()}
            disabled={property.index === 0}
          >
            <span className="glyphicon glyphicon-chevron-left" />
          </button>
          <button
            class="btn btn-outline-dark btn-lg"
            onClick={() => this.nextProperty()}
            disabled={property.index === data.properties.length - 1}
          >
            <span className="glyphicon glyphicon-chevron-right" />
          </button>
        </div>
        <button
          class="btn btn-outline-dark btn-lg"
          onClick={this.handleDelete.bind(this, this.state.property.index)}
        >
          Supprimeer
        </button>

        <div className="page">
          <section>
            <img
              src={require("./img/Logo.jpg")}
              className="App-logo"
              alt="logo"
            />
            <h1>Equipe WeLoveDevs</h1>
          </section>
          <div className="col">
            <div className={`cards-slider active-slide-${property.index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
