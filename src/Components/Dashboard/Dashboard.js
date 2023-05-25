import React from 'react'
import "./Dashboard.css"
import CourseStatus from './Element/CourseStatus'
import Reminders from './Element/Reminders'
import Attendance from './Element 2/Attendance'
import Calendar from './Element 2/Calendar'
const Dashboard = () => {
  return (
    <div className='DashboardContainer'>
      <div className='FirstBox'>
        <CourseStatus />
        <Reminders />
      </div>
      <div className='SecondBox'>
        <Attendance />
        <Calendar />
      </div>
    </div>
  )
}

export default Dashboard