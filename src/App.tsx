import { useEffect, useRef, useCallback } from 'react'
import styles from './app.module.scss'
import useImages from './hooks/useImages'
import SearchInput from './components/SearchInput'
import OptimizedImage from './components/Image'

function App() {
  const { photos, getMorePhotos, loading } = useImages()
  const loader = useRef(null)

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0]
    if (target.isIntersecting) {
      getMorePhotos()
      console.log('loadingMore')
    }
  }, [])

  useEffect(() => {
    getMorePhotos()
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (loader.current) observer.observe(loader.current)
  }, [handleObserver])

  return (
    <div className={styles.list}>
      <div className={styles.images}>
        {photos.map((photo) => (
          <div className={styles.column}>
            <OptimizedImage
              key={photo.id}
              id={photo.id}
              blurHash={photo.blur_hash}
              src={photo.urls.regular}
              height={photo.height / 10}
              width={photo.width / 10}
              alt={photo.alt_description}
            />
          </div>
        ))}
      </div>
      <div ref={loader} />
    </div>
  )
}

export default App
