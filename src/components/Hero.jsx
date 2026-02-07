import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({
  title,
  highlight,
  subtitle,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  backgroundImage,
  videos = [], // Array of video URLs for rotation
  compact = false,
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  // Handle video ended event - rotate to next video
  useEffect(() => {
    const video = videoRef.current
    if (!video || videos.length === 0) return

    const handleVideoEnded = () => {
      // Move to next video (loop back to first)
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
    }

    video.addEventListener('ended', handleVideoEnded)
    video.addEventListener('canplay', handleCanPlay)

    return () => {
      video.removeEventListener('ended', handleVideoEnded)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [videos.length])

  // When video index changes, load and play the new video
  useEffect(() => {
    const video = videoRef.current
    if (!video || videos.length === 0) return

    // Load new video source
    video.load()
    // Play when ready (if isPlaying is true)
    if (isPlaying) {
      video.play().catch((err) => {
        // Autoplay might be blocked - that's ok
        console.log('Video autoplay blocked:', err)
      })
    }
  }, [currentVideoIndex, videos])

  // Handle play/pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch((err) => {
        console.log('Video play blocked:', err)
      })
    }
    setIsPlaying(!isPlaying)
  }

  const hasVideos = videos.length > 0

  return (
    <section
      className={`hero ${compact ? 'hero-compact' : ''} ${hasVideos ? 'hero-video-bg' : ''}`}
      style={!hasVideos && backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Video Background */}
      {hasVideos && (
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={videos.length <= 1}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          {title} {highlight && <span className="hero-highlight">{highlight}</span>}
        </h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {(primaryCta || secondaryCta) && (
          <div className="hero-buttons">
            {primaryCta && (
              <Link to={primaryCtaLink || '/contact'} className="btn btn-primary">
                {primaryCta}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCtaLink || '/about'} className="btn btn-secondary">
                {secondaryCta}
              </Link>
            )}
          </div>
        )}

        {/* Video indicators (only show if multiple videos) */}
        {videos.length > 1 && (
          <div className="hero-video-indicators">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`video-indicator ${index === currentVideoIndex ? 'active' : ''}`}
                onClick={() => setCurrentVideoIndex(index)}
                aria-label={`Play video ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Play/Pause Button - Low Profile */}
      {hasVideos && (
        <button
          className={`hero-play-pause ${isPlaying ? 'playing' : 'paused'}`}
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            // Pause icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            // Play icon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </section>
  )
}

export default Hero
