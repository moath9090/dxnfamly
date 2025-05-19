import React, { useState } from 'react';
import { videos } from '../utils/data';
import VideoCard from '../components/VideoLibrary/VideoCard';
import VideoPlayer from '../components/VideoLibrary/VideoPlayer';
import { Video } from '../utils/data';

const VideoLibraryPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="section-title">شروحات العمل الفيديو</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          شاهد مجموعة متنوعة من الفيديوهات التعليمية والتوضيحية حول العمل مع شركة دي إكس إن وكيفية تحقيق الحرية المالية
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={handleVideoClick}
            />
          ))}
        </div>
        
        <VideoPlayer 
          video={selectedVideo} 
          isOpen={isModalOpen} 
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default VideoLibraryPage;