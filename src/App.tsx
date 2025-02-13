import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchImages } from './services/api.ts'; 
import { Image } from './models/Image';

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getImages = async () => {
      const imagesData = await fetchImages();
      setImages(imagesData);
      setLoading(false);
    };
    getImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Faker API Images</h1>
      <div className="image-list">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.url} alt={image.title} />
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
