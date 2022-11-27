import { useState, useEffect } from 'react'
import './App.css'
import useImages from './hooks/useImages'
import SearchInput from './components/SearchInput'

function App() {
  const { photos, getMorePhotos, loading } = useImages()

  useEffect(() => {
    getMorePhotos()
  }, [])

  useEffect(() => {
    console.log('photos -> ', photos)
  }, [photos])

  return (
    <div>
      <SearchInput />
      <button onClick={() => getMorePhotos()}>LoadMoreImages</button>
      {photos.map((photo) => (
        <img src={photo.urls.regular} />
      ))}
    </div>
  )
}

export default App
