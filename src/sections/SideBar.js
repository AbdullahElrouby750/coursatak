import React from 'react'
import style from './SideBar.module.css'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


import SideBarItems from '../componants/SideBarItems'

export default function SideBar({setSection, section}) {
  const handleClick = (name)=>{
    if(section !== 'signup') setSection(name)
  }

  return (
    <aside className={style.sideBar}>
            <SideBarItems handleClick={handleClick} name={"home"} icon={faHouse} text="القائمة الرئيسية"/>
            <SideBarItems handleClick={handleClick} name={"students"} icon={faGear} text="الطلاب"/>
            <SideBarItems handleClick={handleClick} name={"teachers"} icon={faGear} text="المعلمين"/>
            <SideBarItems handleClick={handleClick} name={"employees"} icon={faGear} text="الموظفون"/>
        </aside>
  )
}
