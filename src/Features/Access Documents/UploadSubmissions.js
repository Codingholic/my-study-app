import React from 'react'
import "./UploadSubmissions.css"
import { motion } from 'framer-motion'
import Navbar from '../../Components/Navbar/Navbar'
const UploadSubmissions = () => {
  return (
    <div className='App'>
      <Navbar />

      <div className='Document_container'>
        <div className='Items_container'>
          <motion.div className='UploadBox' animate={{ width: "45%", height: "90%" }}
            transition={{
              delay: 0.1, type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 100,
            }}></motion.div>
          <motion.div className='UploadBox' animate={{ width: "45%", height: "90%" }}
            transition={{
              delay: 0.1, type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 100,
            }}></motion.div>
        </div>
        <div className='items_second_container'></div>

      </div>
    </div>
  )
}

export default UploadSubmissions