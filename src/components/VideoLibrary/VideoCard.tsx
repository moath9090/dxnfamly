import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../../utils/data';

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="card cursor-pointer group" 
      onClick={() => onClick(video)}
    >
      <div className="relative aspect-video">
        <img 
          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center">
            <Play size={32} className="text-white" fill="white" />
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-600 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;