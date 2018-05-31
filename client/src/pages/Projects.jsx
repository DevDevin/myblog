import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import ProjectCards from '../components/ProjectCards.js';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


class Projects extends Component {
  render(){
    return(
      <div>
      <Navbar/>
      <Jumbotron title="Projects" subtitle="Things turn out best for the people who make the best of the way things turn out. -John Wooden"/>
      <div className="container">

      <h2>Check out my projects!</h2>
      <br/>
      </div>

    <Row>
      <Col sm="4">
        <ProjectCards />
      </Col>
      <Col sm="4">
        <ProjectCards />
      </Col>
      <Col sm="4">
        <ProjectCards />
      </Col>
    </Row>
    <br/>
    <Row>
      <Col sm="4">
        <ProjectCards />
      </Col>
      <Col sm="4">
        <ProjectCards />
      </Col>
      <Col sm="4">
        <ProjectCards />
      </Col>
    </Row>


      </div>
    );
  }
}


export default Projects;
