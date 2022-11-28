import { useEffect, useRef, useCallback } from 'react'
import styles from './app.module.scss'
import useImages from './hooks/useImages'
import SearchInput from './components/SearchInput'
import OptimizedImage from './components/Image'
import useInfinitieScroll from './hooks/useInfinitieScroll'

function App() {
  const infinitieLoaderRef = useRef(null)
  const { photos, getMorePhotos, loading } = useImages()
  useInfinitieScroll(infinitieLoaderRef, getMorePhotos)

  useEffect(() => {
    getMorePhotos()
  }, [])

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
      <div ref={infinitieLoaderRef} />
    </div>
  )
}

export default App
