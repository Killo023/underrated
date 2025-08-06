import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cyber-dark flex items-center justify-center p-4">
          <div className="cyber-border rounded-xl p-8 bg-cyber-gray/80 backdrop-blur-sm max-w-md">
            <h1 className="text-2xl font-bold text-cyber-red mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">
              We're experiencing technical difficulties. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="cyber-button bg-cyber-blue hover:bg-cyber-green"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 