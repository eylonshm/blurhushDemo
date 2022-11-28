import { useState } from 'react'
import { createApi } from 'unsplash-js'
import { getRandomAnimal } from '../helpers'

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY || ''

const defaultGetImagesReponse = {
  results: [],
}
const api = createApi({
  accessKey,
})

const useImages = () => {
  const [photos, setPhotos] = useState<any[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

  const getMorePhotos = async (query: string = getRandomAnimal()) => {
    setLoading(true)
    try {
      const { response = defaultGetImagesReponse } = await api.search.getPhotos({ query, orientation: 'landscape' })
      setPhotos((prevPhotos) => [...prevPhotos, ...response.results])
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
  }

  return { getMorePhotos, loading, photos }
}

export default useImages
