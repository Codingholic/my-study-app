import React from 'react'
import { motion } from 'framer-motion'

import "./AccessDocumentComp.css"
const AccessDocumentComp = () => {
    return (
        <div className='AccessDocuments_Container'>
            <div className='Subjects_container'>
                <div className='Card'>

                </div>
            </div>

            <div className='Semester_container'>
                <div className='Semester_text'>
                    <h3>Semester</h3>
                </div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}>Semester 1</motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}>Semester 2</motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}>Semester 3</motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}>Semester 4</motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}>Semester 5</motion.div>
            </div>
        </div>
    )
}

export default AccessDocumentComp