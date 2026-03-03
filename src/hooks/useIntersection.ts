import { useEffect, useRef, useState } from 'react'

export function useIntersection<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (!entry) return

      if (entry.isIntersecting) {
        setIsIntersecting(true)
        // 한 번 나타나면 관찰 중지 (옵션)
        if (elementRef.current) observer.unobserve(elementRef.current)
      }
    }, options)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [options])

  return { elementRef, isIntersecting }
}
