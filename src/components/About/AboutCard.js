import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gurram Ajith Kumar </span>
            from <span className="purple"> Anantapur,Andhra Pradesh, India.</span>
            <br /> I am a Third Year student pursuing B.Tech.
            in Computer Science & Engineering from Mohan Babu University.
            <br />
            Additionally, I am enthusiastic about Web Development.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
