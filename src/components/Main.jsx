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


          <form id="payment" name="payment" method="post" action="https://sci.interkassa.com/" enctype="utf-8">
            <input type="hidden" name="ik_co_id" value="5cc701ae3b1eaf373c8b4579"></input>
            <input type="hidden" name="ik_pm_no" value="ID_4233"></input>
            <input type="hidden" name="ik_am" value="100.00" ></input>
            <input type="hidden" name="ik_cur" value="UAH" ></input>
            <input type="hidden" name="ik_desc" value="Event Description" ></input>
            <input type="submit" value="Pay"></input>
           
          </form>



      </div>
    )
  }
}

export default Main
