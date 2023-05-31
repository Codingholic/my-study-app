import React from 'react';
import "./Tasks.css";
import { Line, Circle } from 'rc-progress';  
const Tasks = () => {


  return (
    <div className='Tasks'>
      <div className='Task_text'>
        <div style={{ height: "50px", width: "50px", marginTop: "10px"}}>
          <Circle percent={10} strokeWidth={4} strokeColor="#69E279" />
        </div>
        <h2 style={{ color: "white", marginLeft: "10px" }}>Task Progress</h2></div>
      <div className='container'>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
        <div className='Container_tasks' style={{ width: "100%", color: "white" }}>
          <p>English</p>
          <Line percent={20} strokeWidth={3} strokeColor="#69E279" />
        </div>
      </div>
    </div>
  )
}

export default Tasks