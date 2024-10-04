import React from 'react'

import AbsenceDay from './AbsenceDay'

export default function Absence() {
    const testdate = '25/02/2024';
    return (
        <div className=' d-flex flex-column p-2 w-100'>
            <div className='d-flex justify-content-between w-100'>
                <h6>عرض المستوى الحالي</h6>
                <a href="/" className=' text-black fw-bold'>عرض غياب مستويات سابقة</a>
            </div>
            <AbsenceDay date={testdate}/>
            <AbsenceDay date={testdate}/>
            <AbsenceDay date={testdate}/>
        </div>
    )
}
