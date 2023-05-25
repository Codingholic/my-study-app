import React from 'react'
import "./CourseStatus.css"
import { motion, } from 'framer-motion'

const CourseStatus = () => {

  return (
    <div className='Coursestatus'>
      <div className='Charts'>
        <div className='Meter_container'>
          <h3 className='Percentage'>80%</h3>
          <motion.div animate={{ height: "80%" }}
            transition={{ delay: 0.1 ,type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100, }} style={{ backgroundColor: "#FFC0CB" }} className='Meter'>
          </motion.div>
        </div>
        <div className='Meter_container'>
          <h3 className='Percentage'>60%</h3>
          <motion.div animate={{ height: "60%" }}
            transition={{ delay: 0.1 ,type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100, }} style={{ backgroundColor: "#FFF8DC" }} className='Meter'>
          </motion.div>
        </div>
        <div className='Meter_container'>
          <h3 className='Percentage'>50%</h3>
          <motion.div animate={{ height: "50%" }}
            transition={{ delay: 0.1 ,type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100, }} style={{ backgroundColor: "#E6E6FA" }} className='Meter'>
          </motion.div>
        </div>
        <div className='Meter_container'>
          <h3 className='Percentage'>20%</h3>
          <motion.div animate={{ height: "20%" }}
            transition={{ delay: 0.1 ,type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100, }} style={{ backgroundColor: "#7B68EE" }} className='Meter'>
          </motion.div>
        </div>
        <div className='Meter_container'>
          <h3 className='Percentage'>30%</h3>
          <motion.div animate={{ height: "30%" }}
            transition={{ delay: 0.1 ,type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100, }} style={{ backgroundColor: "#B0E0E6" }} className='Meter'>
          </motion.div>
        </div>
        <div className='Meter_container'>
          <h3 className='Percentage'>10%</h3>
          <motion.div animate={{ height: "10%" }}
            transition={{ delay: 0.1 ,type: "spring",
            damping: 10,
            mass: 0.75,
            stiffness: 100, }} style={{ backgroundColor: "#90EE90" }} className='Meter'>
          </motion.div>
        </div>

      </div>
      <div className='Chart_info'>
        {/* <h1 style={{ color: "white" }}>Course status</h1> */}
        <div className='Color_info'>
          <h3>Communicative English</h3>
          <div style={{ backgroundColor: "#FFC0CB" }} className='Box'></div>
        </div>
        <div className='Color_info'>
          <h3>Video Editing</h3>
          <div style={{ backgroundColor: "#FFF8DC" }} className='Box'></div>
        </div>
        <div className='Color_info'>
          <h3>Pro Photography</h3>
          <div style={{ backgroundColor: "#E6E6FA" }} className='Box'></div>
        </div>
        <div className='Color_info'>
          <h3>Copyrighting</h3>
          <div style={{ backgroundColor: "#7B68EE" }} className='Box'></div>
        </div>
        <div className='Color_info'>
          <h3>Media Laws</h3>
          <div style={{ backgroundColor: "#B0E0E6" }} className='Box'></div>
        </div>
        <div className='Color_info'>
          <h3>Ad campaign</h3>
          <div style={{ backgroundColor: "#90EE90" }} className='Box'></div>
        </div>
      </div>
    </div>
  )
}

export default CourseStatus