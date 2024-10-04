import React from 'react'

export default function StudentData({ row1, row2, row3, row4, profileImg }) {
    return (
        <div className='ps-2 d-flex w-100'>
            {profileImg && <div className=' w-25 d-flex justify-content-center align-items-center ms-2'><img className=' w-100 rounded-circle' src={profileImg} alt="profile img" /></div>}
            <div className=' d-flex flex-column align-items-start justify-content-between flex-grow-1'>
                <p>{row1}</p>
                <p>{row2}</p>
                <p>{row3}</p>
                <p>{row4}</p>
            </div>
        </div>
    )
}
