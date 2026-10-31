import React, { useState, useEffect, Component } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsHub } from './components/ProjectsHub';
import { MethodologySection } from './components/MethodologySection';
import { ProfileSection } from './components/ProfileSection';
import { Footer } from './components/Footer';
import { DealModal } from './components/DealModal';
import { CvModal } from './components/CvModal';

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
  const [isCvOpen, setIsCvOpen] = useState(false);

  // Close modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setIsCvOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ErrorBoundary>
      <div className="portfolio-app-root">
        {/* Navigation */}
        <Navbar onOpenCv={() => setIsCvOpen(true)} />

        {/* Hero Section */}
        <HeroSection
          onSelectProject={setSelectedProject}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* Main Financial Models Hub */}
        <ProjectsHub onSelectProject={setSelectedProject} />

        {/* Financial Modeling Standards */}
        <MethodologySection />

        {/* Candidate Background & Credentials */}
        <ProfileSection onOpenCv={() => setIsCvOpen(true)} />

        {/* Footer */}
        <Footer onOpenCv={() => setIsCvOpen(true)} />

        {/* Full-Screen Deal Memorandum Modal */}
        {selectedProject && (
          <DealModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Dedicated In-App CV Modal Viewer */}
        {isCvOpen && (
          <CvModal
            onClose={() => setIsCvOpen(false)}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
