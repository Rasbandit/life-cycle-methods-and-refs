import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'bob',
    };

    console.log('constructor', arguments);
  }

  // componentWillMount() {
  //   console.log('component Will Mount', arguments);
  // }

  componentDidMount() {
    console.log('component did mount', arguments);
    console.log(super.shouldComponentUpdate);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state);
    console.log(nextState);
    return false;
  }

  handleChange(name) {
    this.setState({
      name,
    });
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.name}
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default App;
