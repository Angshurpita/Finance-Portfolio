import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsHub } from './components/ProjectsHub';
import { MethodologySection } from './components/MethodologySection';
import { ProfileSection } from './components/ProfileSection';
import { Footer } from './components/Footer';
import { DealModal } from './components/DealModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Liquid Glass Apple-style Navigation */}
      <Navbar />

      {/* Hero Section with Institutional Apple Aesthetic */}
      <HeroSection onSelectProject={setSelectedProject} />

      {/* Main Financial Models Hub (6 Underwritten Projects) */}
      <ProjectsHub onSelectProject={setSelectedProject} />

      {/* Financial Modeling Standards & Institutional Rigor */}
      <MethodologySection />

      {/* Candidate Background, Academic Excellence (9.72 CGPA), and CV */}
      <ProfileSection />

      {/* Institutional Compliance & Footnotes Footer */}
      <Footer />

      {/* Full-Screen Deal Memorandum & Model Inspector Modal */}
      {selectedProject && (
        <DealModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
