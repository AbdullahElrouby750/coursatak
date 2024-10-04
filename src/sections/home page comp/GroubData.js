import React from 'react'

export default function GroubData({ groubNum, teacherName, nextTime, subscribeType, skitchPrice }) {
    return (
        <div className={`d-flex justify-content-between align-items-center flex-wrap`}>
            <p className='mx-1'> <span className='text-primary'>المجموعة :   </span>  {groubNum}</p>
            <p className='mx-1'> <span className='text-primary'>اسم المعلم : </span>  {teacherName}</p>
            <p className='mx-1'> <span className='text-primary'>موعد الحلقة :</span>  {nextTime}</p>
            <p className='mx-1'> <span className='text-primary'>الإشتراك :   </span>   {subscribeType}</p>
            <p className='mx-1'> <span className='text-primary'>الكراسة :    </span>  {skitchPrice}</p>
        </div>
    )
}
