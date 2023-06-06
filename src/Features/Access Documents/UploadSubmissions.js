import React from 'react'
import "./UploadSubmissions.css"
import { motion } from 'framer-motion'
import Navbar from '../../Components/Navbar/Navbar'
const UploadSubmissions = () => {
  return (
    <div className='App'>
      <Navbar />

      <div className='Upload_Document_container'>
        <div className='Upload_Items_container'>
          <motion.div className='UploadBox' animate={{ width: "45%", height: "90%" }}
            transition={{
              delay: 0.1, type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 100,
            }}>
            <div className='UploadContainer'>
              <div className='choosefile'>
                <label for="images" class="drop-container">
                  <span class="drop-title">Drop files here</span>
                  or
                  <input type="file" id="images" accept="image/*" required />
                </label>
              </div>
            </div>
            <div className='UploadContainer'>
              <div className='file_info'>
                <h5>File Status :</h5>
                <h5>Successfully uploaded</h5>
                <div className='status_file_upload_light'></div>
              </div>
              <div className='file_info'>
                <input className='Display_chosen_project' placeholder='Select a project from your list' type='text' required />
              </div>
              <div className='submit_container'>
                <h5 style={{ marginLeft: "44px" }}>Ready to submit?</h5>
                <motion.button whileTap={{ scale: 0.8 }} className='submit_button' type='submit'>Submit</motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div className='UploadBox2' animate={{ width: "45%", height: "90%" }}
            transition={{
              delay: 0.1, type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 100,
            }}>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
            <div className='project_list'>
              <div className='Sr_number'>
                <h5>1</h5>
              </div>
              <h5>Ad campaign video project</h5>
              <div className='Project_ID'>
                <h5>Project ID : 12</h5>
              </div>
              <div className='project_status'>
                <h5>PENDING</h5>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='Upload_items_second_container'>
          <div className="Upload_items_box1">
            <div className='display_percentage'>
              <h3>Total Projects: 23</h3>
            </div>
            <div className='display_percentage'>
              <h3>Completed Projects: 13</h3>
            </div>
          </div>
          <div className="Upload_items_box2">
            <label style={{ color: "white", marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>Search By ID</label>
            <input className='search_by_id' type='number' />
            <label style={{ color: "white", marginLeft: "10px", marginTop: "10px", marginBottom: "10px" }}>Sort by</label>
            <div className='sort_buttons_containers'>
              <div className='sort_buttons'>A-Z</div>
              <div className='sort_buttons'>Z-A</div>
              <div className='sort_buttons'>newest</div>
              <div className='sort_buttons'>oldest</div>
            </div>
           <div className='show_completed_button'>Show Completed</div>
          </div>
          <div className="Upload_items_box">
            <div style={{color: "white"}} className='urgent_submissions_text'>
              <h4>Urgent due</h4>
            </div>
            <div className='urgent_list'>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
              <div className='urgent_project_id'>1633</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UploadSubmissions