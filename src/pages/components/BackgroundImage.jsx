import React from 'react';
import Image from 'next/legacy/image';
// import bg from '../../../public/images/header-bg';

const BackgroundImage = ({ src, alt, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      {children}
    </div>
  );
};

export default BackgroundImage;
