import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import Email from '../components/Email.js';


class Contact extends Component {
  render(){
    return(
      <div>
      <Navbar/>
      <Jumbotron title="Contact" subtitle="Most folks are about as happy as they make up their minds to be. -Abraham Lincoln"/>
      <div className="container">

      <h2>Contact Information</h2>
      <p>
      Please Contact me if you have any questions about the projects I have done, or if you are an employer and think you could use
      my skill set.
      </p>
      </div>

      <Email/>

      <Footer />
      </div>
    );
  }
}


export default Contact;
