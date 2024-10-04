import React from 'react'

export default function CurrentLvl({ currentlvl }) {
    return (
        <div className='py-2 d-flex justify-content-between align-items-center'>
            <p className=' m-0'><span>المستوى الحالي : </span> {currentlvl}</p>
            <a href="/" className=' text-black fw-bold'>عرض المستوايات السابقة</a>
        </div>
    )
}
