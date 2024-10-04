import React from 'react'
import style from './SideBarItems.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SideBarItems({text, icon, handleClick, name}) {
  return (
    <div className={`${style.item} w-100 mb-4 d-flex justify-content-start align-items-center text-primary`}
    onClick={()=> handleClick(name)}
    >
        
        <FontAwesomeIcon icon={icon}/>
        <h6 className='mx-3'>{text}</h6>
    </div>
  )
}
