import React, { PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';

export default function BlockCarousel({ carousel, imageSize }) {
  const size = imageSize ? imageSize.toLowerCase() : 'large';
  const backgroundSize = size === 'full' ? 'cover' : 'contain';
  const slides = carousel.map((slide, index) => {
    const sizeObject = size === 'full' ? 'full' : {
      height: size,
      width: size,
    };
    return (
      <Box
        key={`slide-${index}`}
        size={sizeObject}
        full={size === 'full' ? true : ''}
        style={{ backgroundPosition: '50% 50%', backgroundSize, width: '100vw' }}
        texture={slide.image.path}
      />
    );
  });

  return (
    <Box full={size === 'full' ? true : ''} size={size}>
      <Carousel>
        {slides}
      </Carousel>
    </Box>
  );
}

BlockCarousel.propTypes = {
  carousel: PropTypes.array,
  imageSize: PropTypes.string,
  headline: PropTypes.string,
  content: PropTypes.string,
};
