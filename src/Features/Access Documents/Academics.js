import React from 'react'
import "./Academics.css"
import Progressbar from 'react-js-progressbar';
import { motion } from 'framer-motion'
import Navbar from '../../Components/Navbar/Navbar'
const Academics = () => {

// const percentage = 80

  return (
    <div className='App'>
      <Navbar />
      <div className='Upload_Document_container'>
        <div className='Upload_Items_container'>
          <div style={{ height: "95%", width: "95%" }}>
            <table className='test' style={{ width: "100%", height: "60%" }}>
              <tr>
                <th className='academic_name'>SUBJECT</th>
                <th className='academic_name'>ISA 1</th>
                <th className='academic_name'>ISA 2</th>
                <th className='academic_name'>SEM 1</th>
                <th className='academic_name'>ISA 1</th>
                <th className='academic_name'>ISA 2</th>
                <th className='academic_name'>SEM 2</th>
                <th className='academic_name'>PRACTICALS</th>
                <th className='academic_name'>PRACTICALS</th>

              </tr>
              <tr>
                <td className='subject_name_table'>English</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>

              </tr>

              <tr>
                <td className='subject_name_table'>psycholoy</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
              </tr>
              <tr>
                <td className='subject_name_table'>Konkani</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>



              </tr>

              <tr>
                <td className='subject_name_table'>Photography</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
              </tr>
              <tr>
                <td className='subject_name_table'>Science</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
              </tr>
              <tr>
                <td className='subject_name_table'>Media Laws</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>

              </tr>
              <tr>
                <td className='subject_name_table'>Media Laws</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
                <td style={{backgroundColor: "white"}}>16</td>
              </tr>
            </table>
            <div className="attendance_academics">

              <div className='academic_boxes' >
              <div className='text_progress_name'>
                  <p>Academics</p>
                </div>
                <div className='circle_progress'>
                <Progressbar
                
                  input={20}
                  pathWidth={10}
                  pathColor={['rgb(36, 145, 98)', 'rgb(89, 255, 152)']} // use an array for gradient color.
                  trailWidth={20}
                  trailColor='white' // use a string for solid color.
                  textStyle={{ fill: 'rgb(89, 255, 152)' }} // middle text style
                >
                </Progressbar>
                </div>
                <div className='text_progress'>
                  <p>required : 50%</p>
                  <p>status : &#128540;</p>
                </div>
              </div>
              <div className='academic_boxes' >
              <div className='text_progress_name'>
                  <p>Attendance</p>
                </div>
                <div className='circle_progress'>
                <Progressbar
                
                  input={20}
                  pathWidth={10}
                  pathColor={['rgb(36, 145, 98)', 'rgb(89, 255, 152)']} // use an array for gradient color.
                  trailWidth={20}
                  trailColor='white' // use a string for solid color.
                  textStyle={{ fill: 'rgb(89, 255, 152)' }} // middle text style
                >
                </Progressbar>
                </div>
                <div className='text_progress'>
                  <p>required : 50%</p>
                  <p>status : &#128540;</p>
                </div>
              </div>
              <div className='academic_boxes' >
                              <div className='text_progress_name'>
                  <p>Attendance</p>
                </div>
                <div className='circle_progress'>
                <Progressbar
                
                  input={20}
                  pathWidth={10}
                  pathColor={['rgb(36, 145, 98)', 'rgb(89, 255, 152)']} // use an array for gradient color.
                  trailWidth={20}
                  trailColor='white' // use a string for solid color.
                  textStyle={{ fill: 'rgb(89, 255, 152)' }} // middle text style
                >
                </Progressbar>
                </div>
                <div className='text_progress'>
                  <p>required : 50%</p>
                  <p>status : &#128540;</p>
                </div>
              </div>

            </div>
          </div>



        </div>
        <div className='Semester_container'>
          <div className='Semester_text'>
            <h3>Semester</h3>
          </div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 1</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 2</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 3</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><h4>Semester 4</h4></motion.div>
          <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}> <h4>Semester 5</h4></motion.div>
          <div className='space'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Academics