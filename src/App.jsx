import React, { useState, useEffect } from 'react';
import { TickerBar } from './components/TickerBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ValuationSandbox } from './components/ValuationSandbox';
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
      {/* Bloomberg-style Live Market Benchmark Ticker */}
      <TickerBar />

      {/* Main Navigation */}
      <Navbar />

      {/* Hero Section with Value Prop and Live Terminal Snapshot */}
      <HeroSection onSelectProject={setSelectedProject} />

      {/* Interactive Financial Sandbox / LBO Simulator */}
      <ValuationSandbox />

      {/* Main Financial Models Hub (6 Projects with Direct Google Sheet Links) */}
      <ProjectsHub onSelectProject={setSelectedProject} />

      {/* Modeling Standards & Methodological Principles */}
      <MethodologySection />

      {/* Candidate Background, Education (9.72 CGPA), and Resume */}
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
