import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  state = {
    value: this.props.counter.value,
  };
  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    return (
      <div>
        <span className={this.getClasses()}>{this.getFormatValue()}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getFormatValue() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
  getClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}
export default Counter;
