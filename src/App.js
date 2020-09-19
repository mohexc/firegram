import React from 'react';
import Title from './components/Title'
import './App.css';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
