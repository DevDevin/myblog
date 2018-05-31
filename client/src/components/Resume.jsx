import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './Resume.css';
import Img from 'react-image';


class ResumeComponent extends Component {

  constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    activeTab: '1'
  };
}

toggle(tab) {
  if (this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab
    });
  }
}
render() {
  return (
    <div className="resumeTabs">
      <Nav tabs>

        <NavItem className="NavItem1">
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
            Education
          </NavLink>
        </NavItem>

        <NavItem className="NavItem2">
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            Experience
          </NavLink>
        </NavItem>

        <NavItem className="NavItem3">
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
            Skills and Achievements
          </NavLink>
        </NavItem>

      </Nav>

      <TabContent activeTab={this.state.activeTab}>

        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <br/>
              <h4>Brigham Young University</h4>
              <p> Bachelor of Science, Information Systems – April 2018 </p>
              <Img src='https://www.drupal.org/files/styles/grid-3/public/BYU_IM22a.jpg?itok=N4dhQlI5' className="byuLogo"></Img>

              <ul id="educationList">
                <li>Y-Award Scholarship Recipient</li><br/>
                <li>Student Officer for AIS (Association of Information Systems): VP of Service</li><br/>
                <li>Specialized Courses: Systems Analysis, Database Systems, Business Programming, Business Processes and Controls, Computer Programming, Spreadsheet and Business Analysis, Computer Networking</li>
              </ul>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
        <Row>
          <Col sm="12">
          <br/>
            <h4>Micro Focus</h4>
            <p>Quality Assurance Engineer Intern</p>
            <Img src='https://media.glassdoor.com/sqll/15057/micro-focus-squarelogo-1467920145205.png' className="experienceLogo"></Img>
            <ul>
              <li>Master software test automation software in order to improve in-house company products by writing scripts to run performance, reliability, and scalability tests.</li>
              <li>Provide management, test team, development team, and clients key information about product tests through reports and write-ups.</li>
              <li>Apply networking knowledge and skills to setup virtual machines and virtual environments to closely mirror client’s usage and environments. </li>
            </ul><br/>

            <h4>BYU AIS (Association for Information Systems)</h4>
            <p>Student Officer and VP of Service</p>
            <Img src='https://pbs.twimg.com/profile_images/378800000435779225/e6785ca41613780aac937ba14bbf3488_400x400.png' className="experienceLogo"></Img>
            <ul>
              <li>Provide opportunities of education and future employment to members of AIS (Association for Information Systems) by planning and carrying out activities. </li>
              <li>Plan and organize service events like “Service Hackathon” and the “Commitree” that assist non-profit organizations and raise money for charity. </li>
              <li>Act as a liaison of AIS in assisting sponsor’s recruiting efforts in activities such as information sessions, sponsorship night, and other recruiting activities. </li>
            </ul><br/>

            <h4>Copyright and Licensing (Brigham Young University)</h4>
            <p>Software Developer</p>
            <Img src='https://pbs.twimg.com/profile_images/721046658813853696/gTPu3sj5_400x400.jpg' className="experienceLogo"></Img>
            <ul>
              <li>Increase time efficiency of management by automating regular business activities and projects</li>
              <li>Develop applications that will add new features and quicken redundant activities done on Microsoft SharePoint</li>
              <li>Diligently study and learn Microsoft SharePoint with books, tutorials, and manuals to become a better employee</li>
            </ul><br/><br/>

            <h4>The Church of Jesus Christ of Latter Day Saints</h4>
            <p>Volunteer Representative</p>
            <Img src='https://www.guidestar.org/ViewEdoc.aspx?eDocId=2670660&approved=True' className="churchLogo"></Img>
            <ul>
              <li>Created productive and creative environment in areas of supervision by training and leading other missionaries by teaching and through example. </li>
              <li>Ensured approximately 200 missionary’s safety, comfort, and ability to work effectively by overseeing entire mission supply inventory while working as Supply Manager. </li>
              <li>Directed approximately 20 missionaries per month in filling out proper documents in order to meet compliance with federal foreign visitor laws and regulations in order to ensure a safe and legal stay in South Korea.</li>
            </ul>

          </Col>
        </Row>
        </TabPane>

        <TabPane tabId="3">
        <Row>
          <Col sm="12">
          <br/>
            <ul>
              <li>Experience in C++, JQuery, VBA, Data Structures, ASP.NET MVC Frame Work, Microsoft SharePoint, Git, Node.js, Tableau, Azure Machine Learning, ReactJS</li><br/>
              <li>Proficient in Microsoft Office Suite, Java, C#, SQL, HTML, CSS, JavaScript, Linux, Apache-jmeter</li><br/>
              <li>Speak Korean at high-fluency level</li><br/>
              <li>Academic – Athletic All State Award – High School</li><br/>
              <li>Eagle Scout</li>
            </ul>
          </Col>
        </Row>
        </TabPane>

      </TabContent>
    </div>
  );
}
}


export default ResumeComponent;
