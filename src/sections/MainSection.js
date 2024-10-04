import React, { useState } from 'react'
import style from './MainSection.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

import FormRegistration from './form comp/FormRegistration'
import Home from './Home'
import EmpPage from './EmpPage'
import StudentsPage from './StudentsPage'
import TeachersPage from './TeachersPage'

export default function MainSection({setSection, section}) {
    const [studentData, setStudentData] = useState(null);
    return (
        <div className={style.wrapper}>

            <div className={`d-flex flex-column justify-content-between h-100 ${section !== 'signup' && 'd-none'}`}>
                <header className={style.header}>
                    <h2>انشاء حساب جديد </h2>
                    <div className={style.bellBox}>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                </header>
                <FormRegistration setSection = {setSection} setStudentData = {setStudentData}/>
            </div>

            <div className={` w-100 h-100 d-flex align-items-center ${section !== 'home' && 'd-none'}`}>
                <Home stData = {studentData}/>
            </div>

            <div className={` w-100 h-100 d-flex align-items-center ${section !== 'students' && 'd-none'}`}>
            <StudentsPage />
            </div>
            
            <div className={` w-100 h-100 d-flex align-items-center ${section !== 'employees' && 'd-none'}`}>
            <EmpPage />
            </div>
            
            <div className={` w-100 h-100 d-flex align-items-center ${section !== 'teachers' && 'd-none'}`}>
            <TeachersPage />
            </div>
            
            
            


        </div>
    )
}
