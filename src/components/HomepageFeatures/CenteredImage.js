import React from 'react';

const CenteredImage = ({ src, alt, width, height }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={src} alt={alt} style={{ width, height }} />
  </div>
);

export default CenteredImage;
