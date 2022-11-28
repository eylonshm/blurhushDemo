import { useEffect } from 'react'
import './App.css'
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
      {photos.map((photo) => (
        <OptimizedImage
          key={photo.id}
          id={photo.id}
          blurHash={photo.blur_hash}
          src={photo.urls.regular}
          height={100}
          width={300}
          alt={photo.alt_description}
        />
      ))}
    </div>
  )
}

export default App
