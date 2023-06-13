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
              <tr style={{ height: "40px", color: "white" }}>
                <th>SR</th>
                <th>Tasks Name</th>
                <th>status</th>
              </tr>
              <tr className="list_of_tasks" style={{ height: "50px" }}>
                <td className="color_tasks" >1</td>
                <td className="color_tasks">Complete Notes</td>
                <td className="color_tasks">active</td>
              </tr>
              <tr className="list_of_tasks" style={{ backgroundColor: "white", height: "50px" }}>
                <td className="color_tasks" >1</td>
                <td className="color_tasks">Complete Notes</td>
                <td className="color_tasks">active</td>
              </tr>
              <tr className="list_of_tasks" style={{ backgroundColor: "white", height: "50px" }}>
                <td className="color_tasks" >1</td>
                <td className="color_tasks">Complete Notes</td>
                <td className="color_tasks">active</td>
              </tr>
              <tr className="list_of_tasks" style={{ backgroundColor: "white", height: "50px" }}>
                <td className="color_tasks" >1</td>
                <td className="color_tasks">Complete Notes</td>
                <td className="color_tasks">active</td>
              </tr>
            </table>
          </div>
          <div className="tasks_show">
            <div className="teachers_profile_tasks"></div>
            <div className="task_info_card">
              <div className="teachers_info_with_tasks">
                <h3>Communicative english</h3>
                <div className="tasks_details">
                  <p>Teacher   : Nikita Chondankar</p>
                  <hr style={{width: "80%"}}/>
                  <p>Project   :  Write an essay</p>
                  <hr style={{width: "80%"}}/>
                  <p>Alloted   :  Individually</p>
                </div>
              </div>
            </div>
            <div className="tasks_information">
              <h5>Description</h5>
               <div className="description_task">
                <p>A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long</p>
               </div>
               <div className="date_due_date">
                <p>Publish date : 23/4/30</p>
                <p>Due date : 24/4/30</p>
               </div>
            </div>
          </div>
        </div>
        <div className="tasks_second_container">
          <h3 className="show_task_text">Show Tasks</h3>
          <div className="Show_tasks_buttons">
            <div className="show_task"> <p>Daily</p></div>
            <div className="show_task"></div>
            <div className="show_task"></div>
            <div className="show_task"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
