import React, { useState, useEffect, Component } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsHub } from './components/ProjectsHub';
import { MethodologySection } from './components/MethodologySection';
import { ProfileSection } from './components/ProfileSection';
import { Footer } from './components/Footer';
import { DealModal } from './components/DealModal';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#FFF', background: '#0A0B0E', textAlign: 'center' }}>
          <h2>Component Error Encountered</h2>
          <p style={{ color: '#FF453A', fontFamily: 'monospace' }}>{this.state.error?.toString()}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
