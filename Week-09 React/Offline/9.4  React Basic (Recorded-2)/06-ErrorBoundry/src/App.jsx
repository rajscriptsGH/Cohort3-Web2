// import { ErrorBoundry } from './ErrorBoundry.jsx'
import React from 'react'
import './App.css'

function App() {

  return (
    <div>
      <h1>Error Boundry</h1>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>
      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
    </div>

  )
}

function Card1() {
  // throw new Error('Error while rendering');

  return <div style={{ backgroundColor: 'blue', padding: 14, borderRadius: 10, margin: 8 }}>
    hello
  </div>
}
function Card2() {
  // throw new Error('Error while rendering');
  return <div style={{ backgroundColor: 'blue', padding: 14, borderRadius: 10 }}>
    hello dear
  </div>
}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default App
