import React from 'react'
import AbsenceCheck from './AbsenceCheck'

export default function absenceDay({ date }) {
    return (
        <div className=' d-flex justify-content-between align-items-center w-100'>
            <h5>{date}</h5>
            <div className=' d-flex w-25 justify-content-between'>

                <AbsenceCheck descripe="حضور" />
                <AbsenceCheck descripe="حفظ" />
            </div>
        </div>
    )
}
