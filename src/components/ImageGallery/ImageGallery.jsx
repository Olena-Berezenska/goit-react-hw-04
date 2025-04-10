import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ picts }) => {
  return (
    <div>
      <ul className={s.galaryList}>
        {picts.map(pict => (
          <ImageCard key={pict.id} picture={pict} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
