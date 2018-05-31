import React, {Component} from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class Home extends Component {
  render(){
    return(
      <div>
      <Navbar/>
      <Jumbotron title="Welcome" subtitle="Courage is not the absence of fear, but the triumph over it -Nelson Mandela"/>
      <div className="container">

        <h2>Thank you for visiting my landing page!</h2>
        <p>
        Whether you are looking for a potential job candidate or wanting to browse through some example code,
        you are in the right place.
        </p>
        <p>Check out my resume and/or personal projects. And feel free to contact me via linked in or email.</p>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default Home;
