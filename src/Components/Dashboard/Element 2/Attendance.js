import React from 'react'
import "./Attendance.css"
import { motion, } from 'framer-motion'
import { easeQuadInOut } from "d3-ease";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider';

const Attendance = () => {
  const Percentage = 53;
  return (
    <motion.div className='Attendance'>
      <div style={{ height: "70%", width: "70%" }} className='Circle_container'>
        <AnimatedProgressProvider
          valueStart={0}
          valueEnd={Percentage}
          duration={0.5}
          easingFunction={easeQuadInOut}
        >
          {value => {
            return (
              <CircularProgressbarWithChildren value={value} styles={buildStyles({
                pathColor: "#69E279"
              })}>

                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
                <div className='Progress_Text' style={{ color: "white" }}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#69E279" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                  </svg>
                  <h1>{Percentage}%</h1>
                </div>
              </CircularProgressbarWithChildren>
            );
          }}
        </AnimatedProgressProvider>
        {/* <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ "--value": 70 }}></div> */}
      </div>

    </motion.div>
  )
}

export default Attendance