import { useEffect } from 'react'
import './App.css'
import styles from './app.module.scss'
import useImages from './hooks/useImages'
import SearchInput from './components/SearchInput'
import OptimizedImage from './components/Image'

function App() {
  const { photos, getMorePhotos, loading } = useImages()

  useEffect(() => {
    getMorePhotos()
  }, [])

  return (
    <div className='list'>
      <>
        <SearchInput />
        <button onClick={() => getMorePhotos()}>LoadMoreImages</button>
      </>
      <div className={styles.images}>
        {photos.map((photo) => (
          <OptimizedImage
            key={photo.id}
            id={photo.id}
            blurHash={photo.blur_hash}
            src={photo.urls.regular}
            height={photo.height / 10}
            width={photo.width / 10}
            alt={photo.alt_description}
          />
        ))}
      </div>
    </div>
  )
}

export default App
