// App.js
import React from 'react';

function App() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of Project 1...",
      githubLink: "https://github.com/Mirkica/matching-kitties",
      liveDemoLink: "https://matching-kitties.netlify.app/"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2...",
      githubLink: "https://github.com/your_username/project-2",
      liveDemoLink: "https://demo.project2.com"
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-primary-dark py-4">
        <div className="container bg-primary-dark mx-auto text-white text-center">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <p className="mt-2">Welcome to my portfolio website!</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="container bg-primary-light mx-auto py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Cards */}
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div className="flex justify-between items-center bg-gray-100 px-6 py-4">
                <a href={project.githubLink} className="text-blue-500 hover:underline">GitHub</a>
                <a href={project.liveDemoLink} className="text-blue-500 hover:underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-4 text-white text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
