import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Image, Button } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <div>
        Main page465
        <Link to='/success'>
          <Button bsStyle="primary" className="ButtonTable">Success</Button>
        </Link>
      </div>
    )
  }
}

export default Main
