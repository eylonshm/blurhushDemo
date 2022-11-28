import React, { useCallback, useEffect } from 'react'

const useInfiniteScroll = (ref: React.RefObject<HTMLElement>, cb: () => void) => {
  const handleObserver = useCallback((entries: any) => {
    const target = entries[0]
    if (target.isIntersecting) {
      cb()
    }
  }, [])

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    }
    const observer = new IntersectionObserver(handleObserver, option)
    if (ref.current) observer.observe(ref.current)
  }, [handleObserver])
}

export default useInfiniteScroll
