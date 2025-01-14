import { Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            The <span className="text-primary">Vision</span>
          </h2>
          <p className="text-xl text-secondary font-montserrat">
            Experience the power of honor in action
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          
          {/* Main Video Container */}
          <div className="relative bg-[#2C2C2C]/90 rounded-lg overflow-hidden">
            {/* Video */}
            <div className="aspect-video relative">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                loop
                muted={isMuted}
                playsInline
                onClick={handleVideoClick} // Add onClick event to the video
              >
                <source src="/hustle.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark/50 group-hover:bg-dark/30 transition-colors duration-300">
                <button 
                  onClick={handlePlayPause}
                  className={`bg-primary/90 hover:bg-primary text-dark p-6 rounded-full transform transition-all duration-300 group-hover:scale-110 ${isPlaying ? 'hidden' : ''}`}
                >
                  <Play className={`w-8 h-8`} />
                </button>
              </div>

              {/* Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="bg-dark/50 p-2 rounded-full hover:bg-dark transition-colors duration-300"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-primary" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-primary" />
                      )}
                    </button>
                    <div className="text-sm text-secondary">01:30 / 03:45</div>
                  </div>
                  <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-montserrat hover:bg-primary/20 transition-colors duration-300 text-sm">
                    Watch Full Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Description */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-secondary leading-relaxed">
            Witness the embodiment of our values through strategic leadership and unwavering dedication. 
            Our vision transcends traditional boundaries, setting new standards in the digital asset space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
