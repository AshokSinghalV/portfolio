import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import turf from "../assets/projects/turf.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={turf}
              isBlog={false}
              title="Turf-Booking_website"
              description="A full-stack web application designed to streamline the process of booking sports turfs online. The platform enables users to register, view available slots, and book turf time seamlessly, while providing an admin dashboard for managing schedules, bookings, and turf availability."
              ghLink="https://github.com/AshokSinghalV/TurfBooking"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Designed and developed a full-stack eCommerce web application that enables users to browse products, add items to cart, place orders, and make secure payments. The platform supports admin functionalities for managing products, categories, and user orders."
              ghLink="https://github.com/AshokSinghalV/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="Developed a full-stack blog application that enables users to create, read, update, and delete blog posts. The application features a clean UI, efficient backend services, and persistent data storage using MySQL."
              ghLink="https://github.com/AshokSinghalV/mern-blog-app"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  )
}

export default Projects