import ReactPlayer from 'react-player';
import {
  Wrapper,
} from './VideoSection.styled';

const VideoSection = () => {
  const urlVideo = 'https://www.youtube.com/watch?v=_d3LK6cmVXQ'
  return (
    <Wrapper>
      <ReactPlayer
        url={urlVideo}
        controls={true}
        width="100%"
        height="auto"
      />
    </Wrapper>
  )
};

export default VideoSection;