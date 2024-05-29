// App.js
import React from 'react';
import './App.css'; // Import Tailwind CSS utility classes

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <p className="mt-2">Welcome to my portfolio website!</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Project Cards */}
          {/* Replace the placeholders with your actual project components */}
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of Project 1...</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">View Project</a>
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-bold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of Project 2...</p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">View Project</a>
          </div>
          {/* Add more project cards as needed */}
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
