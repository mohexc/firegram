import React, { useState } from 'react';
import Title from './components/Title'
import './App.css';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import ModalImage from './components/ModalImage';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <ModalImage selectedImg={selectedImg} />}
    </div>
  );
}

export default App;
