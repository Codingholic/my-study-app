import React from 'react'
import { motion } from 'framer-motion'
import science from "./assets/science.jpg"
import History from "./assets/history.jpeg"
import art from "./assets/art.jpg"
import English from "./assets/english.jpg"
import Maths from "./assets/maths.jpg"
import photography from "./assets/photography.jpeg"
import { AiFillLock } from "react-icons/ai";
import "./AccessDocumentComp.css"
import { BsFillLockFill } from "react-icons/bs";



const AccessDocumentComp = () => {
    const perce = 23
    const content = 23;
    return (
        <div className='AccessDocuments_Container'>
            <div className='Subjects_container'>
                <div className='Card'>
                    <div className='subject_image'>
                        <img className='imageResposive' src={photography} alt='' />
                        <div className='name_background_subject'>
                            <h5>photography</h5>
                        </div>
                        <div className='content_short_form'>
                            <p>content: {content}</p>
                            <p>locked  <BsFillLockFill /></p>
                        </div>
                        <div className='Tr_name'>
                            <div className='Text'>
                                <h3>Prof. Albert</h3>
                            </div>
                        </div>
                        <div className='level_subject'>
                            <div className='level'>
                                <motion.div animate={{ width: "76%" }}
                                    transition={{
                                        delay: 0.1, type: "spring",
                                        damping: 10,
                                        mass: 0.75,
                                        stiffness: 100,
                                    }} className='bar'>
                                    <p>{perce}%</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='Card'>
                    <div className='subject_image'>
                        <img className='imageResposive' src={science} alt='' />
                        <div className='name_background_subject'>
                            <h5>science</h5>
                        </div>
                        <div className='content_short_form'>
                            <p>content: {content}</p>
                            <p>locked  <BsFillLockFill /></p>
                        </div>
                        <div className='Tr_name'>
                            <div className='Text'>
                                <h3>Tr. Nikita</h3>
                            </div>
                        </div>
                        <div className='level_subject'>
                            <div className='level'>
                                <motion.div animate={{ width: "33%" }}
                                    transition={{
                                        delay: 0.1, type: "spring",
                                        damping: 10,
                                        mass: 0.75,
                                        stiffness: 100,
                                    }} className='bar'>
                                    <p>{perce}%</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='subject_image'>
                        <img className='imageResposive' src={History} alt='' />
                        <div className='name_background_subject'>
                            <h5>History</h5>
                        </div>
                        <div className='content_short_form'>
                            <p>content: {content}</p>
                            <p>locked  <BsFillLockFill /></p>
                        </div>
                        <div className='Tr_name'>
                            <div className='Text'>
                                <h3>Tr. Vandana</h3>
                            </div>
                        </div>
                        <div className='level_subject'>
                            <div className='level'>
                                <motion.div animate={{ width: "54%" }}
                                    transition={{
                                        delay: 0.1, type: "spring",
                                        damping: 10,
                                        mass: 0.75,
                                        stiffness: 100,
                                    }} className='bar'>
                                    <p>{perce}%</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='subject_image'>
                        <img className='imageResposive' src={art} alt='' />
                        <div className='name_background_subject'>
                            <h5>art</h5>
                        </div>
                        <div className='content_short_form'>
                            <p>content: {content}</p>
                            <p>locked  <BsFillLockFill /></p>
                        </div>
                        <div className='Tr_name'>
                            <div className='Text'>
                                <h3>Sir. Agnelo</h3>
                            </div>
                        </div>
                        <div className='level_subject'>
                            <div className='level'>
                                <motion.div animate={{ width: "65%" }}
                                    transition={{
                                        delay: 0.1, type: "spring",
                                        damping: 10,
                                        mass: 0.75,
                                        stiffness: 100,
                                    }} className='bar'>
                                    <p>{perce}%</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='subject_image'>
                        <img className='imageResposive' src={English} alt='' />
                        <div className='name_background_subject'>
                            <h5>English</h5>
                        </div>
                        <div className='content_short_form'>
                            <p>content: {content}</p>
                            <p>locked  <BsFillLockFill /></p>
                        </div>
                        <div className='Tr_name'>
                            <div className='Text'>
                                <h3>Tr. Almira</h3>
                            </div>
                        </div>
                        <div className='level_subject'>
                            <div className='level'>
                                <motion.div animate={{ width: "20%" }}
                                    transition={{
                                        delay: 0.1, type: "spring",
                                        damping: 10,
                                        mass: 0.75,
                                        stiffness: 100,
                                    }} className='bar'>
                                    <p>{perce}%</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='subject_image'>
                        <img className='imageResposive' src={Maths} alt='' />
                        <div className='name_background_subject'>
                            <h5>Maths</h5>
                        </div>
                        <div className='content_short_form'>
                            <p>content: {content}</p>
                            <p>locked  <BsFillLockFill /></p>
                        </div>
                        <div className='Tr_name'>
                            <div className='Text'>
                                <h3>Sir. Archie</h3>
                            </div>
                        </div>
                        <div className='level_subject'>
                            <div className='level'>
                                <motion.div animate={{ width: "40%" }}
                                    transition={{
                                        delay: 0.1, type: "spring",
                                        damping: 10,
                                        mass: 0.75,
                                        stiffness: 100,
                                    }} className='bar'>
                                    <p>{perce}%</p>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='Semester_container'>
                <div className='Semester_text'>
                    <h3>Semester</h3>
                </div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}> <AiFillLock />    <h4>Semester 1</h4></motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><AiFillLock />    <h4>Semester 2</h4></motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><AiFillLock />    <h4>Semester 3</h4></motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><AiFillLock />    <h4>Semester 4</h4></motion.div>
                <motion.div className="Semester_buttons" whileTap={{ scale: 0.9 }}><AiFillLock />    <h4>Semester 5</h4></motion.div>
                <div className='space'>

                </div>
            </div>
        </div>
    )
}

export default AccessDocumentComp