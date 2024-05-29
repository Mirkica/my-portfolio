import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    <div className="container mx-auto py-8 flex-content">
      <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
