import React, { useEffect, useRef } from 'react';

const AnimatedVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.style.transform = `translate(0%, -80%)`;
    videoElement.playbackRate = 2.0;

    videoElement.oncanplay = function() {
        videoElement.play();
    };
  }, []);

  return (
    <div className="d-flex justify-content-center mt-5"> {/* Using Bootstrap's flex utility to center the video */}
      <video id="animatedVideo" loop playsInline autoPlay muted ref={videoRef}>
        <source src={require("../assets/epocLoad.mp4")} type="video/mp4" />
      </video>
    </div>
  );
}

export default AnimatedVideo;
