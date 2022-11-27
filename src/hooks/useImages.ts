import { useState } from 'react'
import { createApi } from 'unsplash-js'

const accessKey = process.env.UNSPLASH_ACCESS_KEY || ''

const defaultGetImagesReponse = {
  results: [],
}
const api = createApi({
  accessKey,
})

const useImages = () => {
  const [photos, setPhotos] = useState<any[]>([])

  const getMorePhotos = async (query: string) => {
    try {
      const { response = defaultGetImagesReponse } = await api.search.getPhotos({ query, orientation: 'landscape' })
      setPhotos(response.results)
    } catch {
      console.log('something went wrong!')
    }
  }

  return { getMorePhotos, photos }
}

export default useImages
