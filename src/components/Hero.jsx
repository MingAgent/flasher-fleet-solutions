import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const ROTATION_INTERVAL = 6000 // 6 seconds per video

function Hero({
  title,
  highlight,
  subtitle,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  backgroundImage,
  videos = [],
  compact = false,
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  const timerRef = useRef(null)

  // Advance to the next video in the rotation
  const advanceVideo = useCallback(() => {
    if (videos.length <= 1) return
    setIsVideoLoaded(false) // Trigger fade-out before switch
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 400) // Brief delay for fade-out
  }, [videos.length])

  // 6-second rotation timer
  useEffect(() => {
    if (videos.length <= 1 || !isPlaying) {
      clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(advanceVideo, ROTATION_INTERVAL)

    return () => clearInterval(timerRef.current)
  }, [isPlaying, videos.length, advanceVideo])

  // When video index changes, load and play the new video
  useEffect(() => {
    const video = videoRef.current
    if (!video || videos.length === 0) return

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
      if (isPlaying) {
        video.play().catch((err) => {
          console.log('Video autoplay blocked:', err)
        })
      }
    }

    video.addEventListener('canplay', handleCanPlay)
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [currentVideoIndex])

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

  // Click a specific video indicator dot
  const selectVideo = (index) => {
    // Reset the rotation timer when manually selecting
    clearInterval(timerRef.current)
    setIsVideoLoaded(false)
    setTimeout(() => {
      setCurrentVideoIndex(index)
    }, 400)
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
                onClick={() => selectVideo(index)}
                aria-label={`Play video ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Play/Pause Button - Centered at bottom */}
        {hasVideos && (
          <button
            className={`hero-play-pause ${isPlaying ? 'playing' : 'paused'}`}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        )}
      </div>
    </section>
  )
}

export default Hero
