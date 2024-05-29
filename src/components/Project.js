// src/Project.js
import React from 'react';

const Project = ({ title, description, githubLink, liveDemoLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="flex justify-between items-center bg-gray-100 px-6 py-4">
        <a href={githubLink} className="text-blue-500 hover:underline">GitHub</a>
        <a href={liveDemoLink} className="text-blue-500 hover:underline">Live Demo</a>
      </div>
    </div>
  );
};

export default Project;
