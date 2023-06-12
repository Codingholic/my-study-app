import React from "react";
import "./TaskPage.css";
import Navbar from "../../Components/Navbar/Navbar";
const TaskPage = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Document_container">
        <div className="tasks_list_container">
          <div className="tasks_list">
            <table className="tasks_table">
              <tr style={{ height: "40px" }}>
                <th>SR</th>
                <th>Tasks Name</th>
                <th>status</th>
              </tr>
              <tr style={{ backgroundColor: "white", height: "50px" }}>
                <td>1</td>
                <td>Complete Notes</td>
                <td>active</td>
              </tr>
              
            </table>
          </div>
          <div className="tasks_show"></div>
        </div>
        <div className="tasks_second_container"></div>
      </div>
    </div>
  );
};

export default TaskPage;
