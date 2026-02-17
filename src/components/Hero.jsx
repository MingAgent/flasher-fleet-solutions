import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const IMAGE_DISPLAY_TIME = 5000 // 5 seconds per image

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
  heroImages = [],
  compact = false,
}) {
  // Media state: tracks whether we're showing 'video' or 'image'
  const [mediaMode, setMediaMode] = useState(videos.length > 0 ? 'video' : 'image')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMediaVisible, setIsMediaVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)
  const imageTimerRef = useRef(null)
  const isPlayingRef = useRef(true)

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  // When the video ends, transition to image cycling (or loop if no images)
  const handleVideoEnded = useCallback(() => {
    if (heroImages.length > 0) {
      // Fade out video, switch to image mode
      setIsMediaVisible(false)
      setTimeout(() => {
        setCurrentImageIndex(0)
        setMediaMode('image')
        // Small delay then fade in the first image
        setTimeout(() => setIsMediaVisible(true), 100)
      }, 600)
    } else {
      // No images to show — just loop the video
      const video = videoRef.current
      if (video) {
        video.currentTime = 0
        video.play().catch(() => {})
      }
    }
  }, [heroImages.length])

  // Image cycling timer — when in image mode, advance every 5 seconds
  useEffect(() => {
    if (mediaMode !== 'image' || heroImages.length === 0 || !isPlaying) {
      clearInterval(imageTimerRef.current)
      return
    }

    imageTimerRef.current = setInterval(() => {
      setIsMediaVisible(false)

      setTimeout(() => {
        setCurrentImageIndex((prev) => {
          const nextIndex = prev + 1

          // After last image, go back to video if we have one
          if (nextIndex >= heroImages.length && videos.length > 0) {
            setMediaMode('video')
            return 0
          }

          // Otherwise loop back to first image
          return nextIndex % heroImages.length
        })

        setTimeout(() => setIsMediaVisible(true), 100)
      }, 600)
    }, IMAGE_DISPLAY_TIME)

    return () => clearInterval(imageTimerRef.current)
  }, [mediaMode, heroImages.length, videos.length, isPlaying])

  // When switching to video mode, load and play
  useEffect(() => {
    if (mediaMode !== 'video') return
    const video = videoRef.current
    if (!video || videos.length === 0) return

    const handleCanPlay = () => {
      setIsMediaVisible(true)
      if (isPlayingRef.current) {
        video.play().catch((err) => {
          console.log('Video autoplay blocked:', err)
        })
      }
    }

    const handleLoadedData = () => {
      setIsMediaVisible(true)
      if (isPlayingRef.current) {
        video.play().catch((err) => {
          console.log('Video autoplay blocked:', err)
        })
      }
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.currentTime = 0
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [mediaMode, videos.length])

  // Safety net: handle video stall or error
  useEffect(() => {
    const video = videoRef.current
    if (!video || videos.length === 0) return

    const handleStalled = () => {
      if (isPlayingRef.current) {
        setTimeout(() => {
          video.play().catch(() => {})
        }, 1000)
      }
    }

    const handleError = () => {
      console.log('Video error, switching to images')
      if (heroImages.length > 0) {
        setMediaMode('image')
        setIsMediaVisible(true)
      }
    }

    video.addEventListener('stalled', handleStalled)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('stalled', handleStalled)
      video.removeEventListener('error', handleError)
    }
  }, [videos.length, heroImages.length])

  // Handle play/pause toggle
  const togglePlayPause = () => {
    const video = videoRef.current

    if (isPlaying) {
      if (video && mediaMode === 'video') video.pause()
      clearInterval(imageTimerRef.current)
    } else {
      if (video && mediaMode === 'video') {
        video.play().catch(() => {})
      }
      // Image timer will restart via the useEffect
    }
    setIsPlaying(!isPlaying)
  }

  const hasVideos = videos.length > 0
  const hasHeroImages = heroImages.length > 0
  const hasMedia = hasVideos || hasHeroImages

  // For pages with no videos and no heroImages array, use single background
  const useStaticBackground = !hasVideos && !hasHeroImages && backgroundImage

  return (
    <section
      className={`hero ${compact ? 'hero-compact' : ''} ${hasMedia ? 'hero-media-bg' : ''} ${useStaticBackground ? 'hero-image-bg' : ''}`}
      style={useStaticBackground ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Video layer — always rendered if videos exist, visibility controlled */}
      {hasVideos && (
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className={`hero-video ${mediaMode === 'video' && isMediaVisible ? 'loaded' : ''}`}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
          >
            <source src={videos[0]} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Image layer — shown when in image mode */}
      {hasHeroImages && (
        <div className={`hero-image-layer ${mediaMode === 'image' && isMediaVisible ? 'visible' : ''}`}>
          <img
            src={heroImages[currentImageIndex]}
            alt=""
            className="hero-image-img"
          />
        </div>
      )}

      {/* Ken Burns for static background (non-video, non-carousel pages) */}
      {useStaticBackground && (
        <div className="hero-ken-burns" style={{ backgroundImage: `url(${backgroundImage})` }} />
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

        {/* Media indicator dots */}
        {hasHeroImages && hasVideos && (
          <div className="hero-media-indicators">
            <span className={`media-indicator ${mediaMode === 'video' ? 'active' : ''}`} />
            {heroImages.map((_, index) => (
              <span
                key={index}
                className={`media-indicator ${mediaMode === 'image' && currentImageIndex === index ? 'active' : ''}`}
              />
            ))}
          </div>
        )}

        {/* Play/Pause Button */}
        {hasMedia && (
          <button
            className={`hero-play-pause ${isPlaying ? 'playing' : 'paused'}`}
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
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
