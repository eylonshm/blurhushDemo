import { useState } from 'react'
import { createApi } from 'unsplash-js'

const accessKey = '4EDF7JzMSTa-cvQ38jYlS3iB_lKY4a3Uwj888Ce2d80'

const defaultGetImagesReponse = {
  results: [],
}
const api = createApi({
  accessKey,
})

const useImages = () => {
  const [photos, setPhotos] = useState<any[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

  const getMorePhotos = async (query: string = 'cats') => {
    setLoading(true)
    try {
      const { response = defaultGetImagesReponse } = await api.search.getPhotos({ query, orientation: 'landscape' })
      setPhotos(response.results)
    } catch {
      console.log('something went wrong!')
    }
    setLoading(false)
  }

  return { getMorePhotos, loading, photos }
}

export default useImages
