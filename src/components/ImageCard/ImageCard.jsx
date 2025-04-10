import React from 'react';
import st from './ImageCard.module.css';

const ImageCard = ({ picture }) => {
  return (
    <li className={st.card}>
      <div className={st.galleryimage}>
        <img src={picture.urls.small} alt="photo" className={st.gallerylink} />
      </div>
    </li>
  );
};

export default ImageCard;
