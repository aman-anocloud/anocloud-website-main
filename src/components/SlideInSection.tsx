'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function SlideInSection({
  children,
  reanimate = false,
}: {
  children: React.ReactNode
  reanimate?: boolean // optional: if you want it to animate every time it comes into view
}) {
  const { ref, inView } = useInView({
    triggerOnce: !reanimate,
    threshold: 0.1,
  })

  const [hasBeenInView, setHasBeenInView] = useState(false)

  useEffect(() => {
    if (inView && !hasBeenInView) {
      setHasBeenInView(true)
    } else if (!inView && reanimate) {
      setHasBeenInView(false)
    }
  }, [inView, reanimate, hasBeenInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.95, rotate: -2 }}
      animate={hasBeenInView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1], // custom ease
        type: 'spring',
        stiffness: 80,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  )
}
