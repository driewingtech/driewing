import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Web3 NFT Marketplace",
      description: "Backend services for a blockchain-based NFT application. Integrated smart contracts using web3.js and managed scalable data with MongoDB.",
      tags: ["Node.js", "MongoDB", "Web3.js", "Ethereum"],
      link: "#"
    },
    {
      title: "Full-Stack Dashboard",
      description: "A comprehensive MERN stack application featuring secure authentication, data visualization, and user management.",
      tags: ["React", "Express", "MongoDB", "Node.js"],
      link: "#"
    },
    {
      title: "Solana DApp Component",
      description: "Developed Rust-based blockchain components and contract interactions for the Solana ecosystem.",
      tags: ["Rust", "Solana", "Blockchain"],
      link: "#"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-5 text-center">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
