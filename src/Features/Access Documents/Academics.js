import React from 'react'
import "./Academics.css"
import { motion } from 'framer-motion'
import Navbar from '../../Components/Navbar/Navbar'
const Academics = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='Upload_Document_container'>
        <div className='Upload_Items_container'></div>
        <div className='Semester_container'>
          <div className='Semester_text'>
            <h3>Semester</h3>
          </div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 1</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 2</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 3</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 4</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}> <h4>Semester 5</h4></motion.div>
          <div className='space'></div>
        </div>
      </div>
    </div>
  )
}

export default Academics