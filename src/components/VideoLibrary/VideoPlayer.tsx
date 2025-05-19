import React from 'react';
import YouTube from 'react-youtube';
import { Video } from '../../utils/data';
import Modal from '../UI/Modal';

interface VideoPlayerProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, isOpen, onClose }) => {
  if (!video) return null;

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      hl: 'ar',
      cc_lang_pref: 'ar',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={video.title}
    >
      <div className="aspect-video mb-4">
        <YouTube
          videoId={video.videoId}
          opts={opts}
          className="w-full"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
      <p className="text-gray-700">{video.description}</p>
    </Modal>
  );
};

export default VideoPlayer;