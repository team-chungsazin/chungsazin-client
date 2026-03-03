import { useEffect, useState } from 'react'

export function useScroll() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      // 스크롤 진행률 계산
      if (scrollHeight > 0) {
        setScrollProgress((currentScrollY / scrollHeight) * 100)
      }

      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingUp(false) // 내려가는 중 (헤더 숨김)
      } else {
        setIsScrollingUp(true) // 올라가는 중 (헤더 표시)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { scrollProgress, isScrollingUp }
}
