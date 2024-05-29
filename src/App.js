// src/App.js
import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';

function App() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1...",
      githubLink: "https://github.com/your_username/project-1",
      liveDemoLink: "https://demo.project1.com"
    },
  // add more projects here
  ];

  return (
    <div className="flex-container">
      <Header />
      <ProjectList projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
