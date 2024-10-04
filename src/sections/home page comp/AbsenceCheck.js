import React,{useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import style from './checkStyle.module.css'

export default function AbsenceCheck({ descripe }) {
    const [check, setCheck] = useState(false)
    return (
        <div className='h-25 d-flex justify-content-end align-items-center'>
            <h6>{descripe}</h6>
            <div className={style.checkBox} onClick={() =>setCheck(!check)}>
                {check && <FontAwesomeIcon icon={faCheck}/>}
            </div>
        </div>
    )
}
