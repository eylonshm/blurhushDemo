import React from 'react'
import LazyLoadImage from './LazyLoadImage'
import { Blurhash } from 'react-blurhash'

type ImageInterface = {
  id: string
  height: number
  width: number
  src: string
  alt?: string
  blurHash: string
}

const OptimizedImage: React.FC<ImageInterface> = ({ alt, height, width, src, id, blurHash }) => {
  return (
    <LazyLoadImage
      placeholder={<Blurhash hash={blurHash} width={width} height={height} resolutionX={32} resolutionY={32} />}
      id={id}
      alt={alt}
      height={height}
      src={src}
      width={width}
    />
  )
}

export default OptimizedImage
