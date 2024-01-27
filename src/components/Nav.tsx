import { motion } from 'framer-motion'
import { useState } from 'react'
import { useMediaQuery } from '../utils/useMediaQuery'

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15
    }
  },
  hidden: {
    opacity: 0
  }
}
const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 }
}
export default function NavBar() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>
      <div className="text-lg font-bold">
        <a href="/">Noah Wekesa</a>
      </div>

      {/* title */}
      <motion.div
        className="hidden items-center gap-12 xl:flex"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%'
        }}
      >
        🥤
      </motion.div>

      {/* check if were on mobile or not */}
      {matches && (
        <div className="flex gap-12">
          <a className="hover:underline" href="/works">
            works
          </a>
          <a className="hover:underline" href="/contact">
            contact
          </a>
          <a
            className="hover:underline"
            href="http://github.com/Noahwekesa/wekesa-homepage.git"
            target="_blank"
          >
            source
          </a>
        </div>
      )}

      {/*Toggle*/}
      {!matches && (
        <div
          onClick={() => setToggled(prevToggle => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>

          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}
      {toggled && !matches && (
        <motion.div
          animate={{
            opacity: 1,
            x: 25
          }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex bottom-0 z-[1] bg-base-100 left-0 w-full h-screen items-center justify-center"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a
              variants={itemMotion}
              className="hover:underline"
              href="/works"
            >
              works
            </motion.a>
            <motion.a
              variants={itemMotion}
              className="hover:underline"
              href="/works"
            >
              contact
            </motion.a>
            <motion.a
              variants={itemMotion}
              className="hover:underline"
              href="/works"
            >
              source
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  )
}
