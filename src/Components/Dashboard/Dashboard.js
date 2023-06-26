import React from 'react'
import "./Dashboard.css"
import CourseStatus from './Element/CourseStatus'
import Reminders from './Element/Reminders'
import Attendance from './Element 2/Attendance'
import Tasks from './Element 2/Tasks'
import "../Responsive/ResponsiveTablet.css"
const Dashboard = () => {
  return (
    
    <div className='DashboardContainer'>
      <div className='FirstBox'>
        <CourseStatus />
        <Reminders />
      </div>
      <div className='SecondBox'>
        <Attendance />
        <Tasks />
      </div>
    </div>
  )
}

export default Dashboard