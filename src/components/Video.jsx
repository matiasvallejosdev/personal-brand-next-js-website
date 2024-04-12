

export default function Video({ srcVideo }) {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Cover the container, maintaining aspect ratio
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)' // Center the video
        }}
        autoPlay // Autoplay on all devices
        playsInline // Ensures inline playback on mobile to avoid fullscreen
        muted // Muted, as many browsers do not allow autoplay with sound
        loop // Loop the video
      >
        <source src={srcVideo} type="video/mp4" />
      </video>
    </div>
  );
}