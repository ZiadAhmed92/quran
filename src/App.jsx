
import { useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Photo from './Components/Photo/Photo';
import Info from './Components/Information/Info';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Quran from './Components/Quran/Quran';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Shikh from './Components/Shikh/Shikh';
import Juz from './Components/Juz/Juz';
import Juzchild from './Components/Juz/juzchild';
import Profile from './Components/Profile/Profile';
import PrayerTimings from './Components/PrayerTimings/PrayerTimings';
function App() {
  const [scroll, setScroll] = useState(0);
  const [theme, colorMode] = useMode();
  const [sora, setSora] = useState([]);
  const [name, setName] = useState([]);
  const [sura, setSura] = useState([]);
  window.onscroll = function () {
    setScroll(scrollY);
  };

  return (
   <>
    {/* <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline /> */}
<Header/>

   <Routes>
    <Route path='/' element={<Main  setSora={setSora}/>} />
    <Route path='main' element={<Main setSora={setSora} />} />
    <Route path='quran' element={<Quran sora={sora} name={name} setName={setName} />} >
   
    <Route path=':id' element={<Quran sora={sora} name={name} setName={setName} />} />
    

    </Route> 
    <Route path=':shikh/:name/:id' element={<Shikh  sora={sora}  />} /> 
    <Route path='photo' element={<Photo sura={sura} setSura={setSura} />} />
    <Route path='info' element={<Info />} />
    <Route path='juz' element={<Juz />} /> 
    <Route path=':id' element={<Juzchild />}/>
    <Route path='profile' element={<Profile />}/>
    <Route path='prayer' element={<PrayerTimings />}/>

   
    {/* <Route path='info' element={<Info />} /> */}
   </Routes>

   

   <a href="#home">
        {" "}
        <div
          className={` arrowUp position-fixed ${
            scroll >= 500 ? " d-flex" : "d-none"
          }`}
        >
       
       <KeyboardArrowUpIcon  className=" fa-solid fa-arrow-up"/>  
        </div>
      </a>
      {/* </ThemeProvider>
    </ColorModeContext.Provider> */}
   </>
  )
}

export default App
