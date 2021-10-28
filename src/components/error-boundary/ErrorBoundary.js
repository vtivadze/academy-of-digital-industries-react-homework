import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({error});
  }

  render() {
    const {error} = this.state;

    if ( error) {
      return <div className="columns">
        <div className="box">
          <h2 className="has-text-color-danger">Something went wrong!!!</h2>
          <p>{error.toString()}</p>
        </div>
      </div>
    }

    return this.props.children;
  };
}