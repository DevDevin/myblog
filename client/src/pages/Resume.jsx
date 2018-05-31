import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import ResumeComponent from '../components/Resume.jsx';
import Img from 'react-image';


class Resume extends Component {
  render(){
    return(
      <div>
      <Navbar/>
      <Jumbotron title="Resume" subtitle="The key is not the will to win… everybody has that. It is the will to prepare to win that is important. -Bobby Knight"/>
      <div className="container">

        <h2>Check out my resume!</h2><br/>
        </div>
        <ResumeComponent/>
      </div>
    );
  }
}


export default Resume;
