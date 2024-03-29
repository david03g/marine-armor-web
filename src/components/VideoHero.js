import React, { useEffect, useRef } from "react";

function VideoHero({ src, overlaycontent }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // This useEffect hook is kept for any potential future side effects.
  }, []);

  const handlePlayVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch(e => console.error("Error attempting to play video:", e));
    }
  };

  return (
    <div className="video-background">
      <video ref={videoRef} loop muted autoPlay>
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      {/* Inline CSS to hide the button */}
      <button className="play-video-button" onClick={handlePlayVideo} style={{ display: 'none' }}>Play</button>
      <div className="overlay-content">
        {overlaycontent}
      </div>
    </div>
  );
}

export default VideoHero;
