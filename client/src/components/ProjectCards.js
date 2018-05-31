import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './ProjectCards.css';
import {Link} from 'react-router-dom';

const ProjectCards = (props) => {
  return (
    <div>

    <Link className="nav-link" to="/contact">
      <Card className="card">
        <CardImg top width="100%" src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Card image cap" />
        <CardBody>
          <CardTitle>Project ##</CardTitle>
          <CardSubtitle>Project XXX</CardSubtitle>
          <CardText>Please Click on the link below to download my repository and check out my source code.</CardText>
        </CardBody>
      </Card>

    </Link>

    </div>
  );
};

export default ProjectCards;
