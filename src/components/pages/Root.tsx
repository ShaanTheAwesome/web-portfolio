import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Landing from './Landing'
import Navbar from '../Panels/Navbar'
import App from './App'

export default function Root() {
  const [started, setStarted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <motion.div
          key="landing"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeIn" as const }}
        >
          <Landing onStart={() => setStarted(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <Navbar />
          <App />
        </motion.div>
      )}
    </AnimatePresence>
  );
}