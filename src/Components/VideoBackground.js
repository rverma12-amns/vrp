
import React from "react";

const VideoBackground = () => {
  return (
    <div style={styles.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.video}
        preload="auto"
      >
        <source
          src="https://www.amns.in/storage/home-banners/December2022/M3EunAcW6ftlsXkls52U.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div style={styles.overlay}></div>
    </div>
  );
};

const styles = {
 
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))" // Dark tint 💡
  
  }
};

export default VideoBackground;