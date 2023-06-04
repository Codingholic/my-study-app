import React from 'react'
import "./DocumentList.css"
import { motion } from 'framer-motion'
import Navbar from '../../Components/Navbar/Navbar'
import { BsFillLockFill } from "react-icons/bs";

const DocumentList = () => {
    return (
        <div className='App'>
            <Navbar />
            <div className='Document_container'>
                <div className='Items_container'>
                    <div className='Item_container'>
                        <h5>English PPT NORDIC IDNA</h5>
                        <div style={{ display: "flex" }}>
                            <motion.div whileTap={{ scale: 0.8 }} style={{ height: 40, width: 90, backgroundColor: "#69E279", marginRight: "20px" }} className='Download_button' type='download'>Download</motion.div>
                            <div style={{ height: 40, width: 90, backgroundColor: "#69E279" }} className='Download_button' type='download'><BsFillLockFill /> Locked</div>
                        </div>
                    </div>
                    <div className='Item_container'>
                        <h5>English PPT NORDIC IDNA</h5>
                        <div style={{ display: "flex" }}>
                            <motion.div whileTap={{ scale: 0.8 }} style={{ height: 40, width: 90, backgroundColor: "#69E279", marginRight: "20px" }} className='Download_button' type='download'>Download</motion.div>
                            <div style={{ height: 40, width: 90, backgroundColor: "#69E279" }} className='Download_button' type='download'><BsFillLockFill /> Locked</div>
                        </div>
                    </div>
                    <div className='Item_container'>
                        <h5>English PPT NORDIC IDNA</h5>
                        <div style={{ display: "flex" }}>
                            <motion.div whileTap={{ scale: 0.8 }} style={{ height: 40, width: 90, backgroundColor: "#69E279", marginRight: "20px" }} className='Download_button' type='download'>Download</motion.div>
                            <div style={{ height: 40, width: 90, backgroundColor: "#69E279" }} className='Download_button' type='download'><BsFillLockFill /> Locked</div>
                        </div>
                    </div>
                    <div className='Item_container'>
                        <h5>English PPT NORDIC IDNA</h5>
                        <div style={{ display: "flex" }}>
                            <motion.div whileTap={{ scale: 0.8 }} style={{ height: 40, width: 90, backgroundColor: "#69E279", marginRight: "20px" }} className='Download_button' type='download'>Download</motion.div>
                            <div style={{ height: 40, width: 90, backgroundColor: "#69E279" }} className='Download_button' type='download'><BsFillLockFill /> Locked</div>
                        </div>
                    </div>
                </div>
                <div className='items_second_container'>
                      <div className='Content_box'>
                        <h5>Total Content</h5>
                        <h1 style={{fontSize: "50px"}}>12</h1>
                      </div>
                      <div className='Content_box'>
                        <h5>Total Chapters</h5>
                        <h1 style={{fontSize: "50px"}}>6</h1>
                      </div>
                      <div className='Content_box'>
                        <h5>Chapters Completed</h5>
                        <h1 style={{fontSize: "50px"}}>5</h1>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentList