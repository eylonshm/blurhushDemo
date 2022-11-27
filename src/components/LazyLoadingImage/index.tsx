import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

type ImageInterface = {
  key: number
  height: number
  width: string
  src: string
  alt?: string
}

const LazyLoad: React.FC<ImageInterface> = ({ alt, height, width, src, key }) => (
  <LazyLoadImage key={key} alt={alt} height={height} src={src} width={width} />
)

export default LazyLoad
