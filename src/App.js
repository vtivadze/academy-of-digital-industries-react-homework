import React from 'react';
import './App.css';
import { Header, Footer, Sidebar, Main } from './layout';

export function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
      </div>
      <div className="container column">
        <div className="columns is-gapeless">
          <Sidebar />
          <Main />
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
