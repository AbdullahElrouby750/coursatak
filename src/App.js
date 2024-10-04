import { useState } from 'react';

import style from './App.module.css'
import MainSection from './sections/MainSection';

import SideBar from './sections/SideBar';

function App() {
  
  const [section, setSection] = useState('signup');
  return (
    <div className={style.App}>
      <SideBar setSection={setSection} section={section}/>
      <MainSection setSection={setSection} section={section}/>
    </div>
  );
}

export default App;
