import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type ImageInterface = {
  id: string
  height: number
  width: number
  src: string
  alt?: string
  placeholder: any
}

const LazyLoad: React.FC<ImageInterface> = ({ alt, height, width, src, id, placeholder }) => (
  <LazyLoadImage placeholder={placeholder} key={id} alt={alt} height={height} src={src} width={width} />
)

export default LazyLoad
