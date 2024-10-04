import React, { useState, useEffect } from 'react'
import StudentData from './home page comp/StudentData'

import style from './Home.module.css'
import GroubData from './home page comp/GroubData';
import CurrentLvl from './home page comp/CurrentLvl';
import Absence from './home page comp/Absence';

import { getData } from '../logic/handlingData';

export default function Home({ stData }) {
    const imgPlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png';

    const [groubName, setGroubname] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [courseTime, setCourseTime] = useState('');
    const [subscibeType, setSubscibeType] = useState('');
    const [skitchPrice, setSkitchPrice] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData('groups');

                // Check if data exists before setting state
                if (data) {
                    setGroubname(data[0].groubName || 'N/A');
                    setTeacherName(data[0].teacher || 'N/A');
                    setCourseTime(data[0].courseTime || 'N/A');
                    setSubscibeType(data[0].subscibeType || 'N/A');
                    setSkitchPrice(data[0].skitchPrice || 'N/A');
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className={style.wrapper}>

            <div className={` d-flex justify-content-start w-100`}>
                <div className={`${style.dataWrappers}`}>
                    <StudentData row1={`اسم الطالب: ${stData && stData.name}`} row2={`كود الطالب: ${stData && stData.ID}`} row3={`تاريخ الميلاد: ${stData && stData.dateOfBirth}`} row4={`السن: ${stData && stData.age}`} profileImg={imgPlaceholder} />
                </div>
                <div className={`${style.dataWrappers}`}>
                    <StudentData row1={`العنوان: ${stData && stData.address}`} row2={`المكتب: ${stData && stData.office}`} row3={`حالة الطالب: طبيعي`} row4={`تاريخ الإلتحاق: ${stData && stData.joinData}`} />
                </div>
            </div>


            <div className={style.dataWrappers}>
                <GroubData groubNum={groubName} teacherName={teacherName} nextTime={courseTime} subscribeType={subscibeType} skitchPrice={skitchPrice} />
            </div>

            <div className={style.dataWrappers}>
                <CurrentLvl currentlvl='المستوى الأول' />
            </div>

            <div className={style.dataWrappers}>
                <Absence />
            </div>
        </div>
    )
}

