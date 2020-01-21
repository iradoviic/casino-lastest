import React, { Component } from 'react';
import UserForm from './components/UserForm';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserForm />
      </div >
    );
  }
}

export default App;
