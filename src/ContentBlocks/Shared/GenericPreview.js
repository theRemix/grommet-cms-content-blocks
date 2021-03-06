// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import removeMarkdown from 'remove-markdown';

export default function GenericPreview(props: {
  content: string,
  image: ?{
    path: string,
  },
  carousel?: Array<{
    image: {
      path: string
    }
  }>
}) {
  const { content, image, carousel } = props;
  const text = content && content.length > 50
    ? content.slice(0, 50)
    : content;
  const textWithoutMarkdown = text ? removeMarkdown(text) : '';
  return (
    <Box
      colorIndex="light-1"
      direction="row"
      pad={{ between: 'medium' }}
      full="horizontal"
    >
      {image && image.path &&
        <Image size="thumb" src={image.path} />
      }
      {carousel &&
        <Image size="thumb" src={carousel[0].image.path} />
      }
      <Heading tag="h3">
        {textWithoutMarkdown}
      </Heading>
    </Box>
  );
}

GenericPreview.defaultProps = {
  content: '',
};
