import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <div className="card-handmade h-100 d-flex flex-column">
      <Card.Body>
        <Card.Title as="h3">{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <div className="mb-3">
          {tags.map((tag, index) => (
            <span key={index} style={{
              display: 'inline-block',
              padding: '2px 8px',
              marginRight: '5px',
              border: '1px solid var(--ink-color)',
              borderRadius: '15px 5px 12px 5px',
              fontSize: '0.9rem',
              backgroundColor: 'rgba(0,0,0,0.05)'
            }}>
              #{tag}
            </span>
          ))}
        </div>
        {/* <div className="mt-auto">
            <Button href={link} target="_blank" variant="light" className="btn-handmade w-100">
            View Project
            </Button>
        </div> */}
      </Card.Body>
    </div>
  );
};

export default ProjectCard;
