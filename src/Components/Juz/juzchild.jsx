import { Avatar, Box, Typography } from '@mui/material';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const juzchild = () => {
    const[juz , setJuz] = useState([]);
   let {id} = useParams()


async function getName() {
    let { data } = await axios.get(
      ` https://api.alquran.cloud/v1/juz/${id}/quran-uthmani`
    );
    setJuz(data.data.ayahs);
    
  }

  useEffect(() => {
    getName();
  }, []);
  return (
    <>
    {juz ?( <div className="flex px-2 sora-main quran-main p-3 border">
          <div className="flex fw-bold p-2 ayat">
            <div className="mx-2 fs-2">آيات</div>   
             {juz[0]?.surah.numberOfAyahs}
                  </div>
            
                  <Box flexGrow={1} />
            <Typography textAlign={"end"} className="fw-bold mx-2 py-2">
             
          
            {juz[0]?.surah.name}
          </Typography>
          <Avatar className="avatar" sx={{ width: "30px", height: "30px" }}>
              {juz[0]?.juz}
            </Avatar>
          </div>):""}
       
          
    <div className="text-center p-3">
        {juz.map((item, i) => (
            <h1 className="sura" key={i}>
              {item.text}
              <span className="num-sura">{++i}</span>
            </h1>
          ))}
      </div>
    </>
  )
}

export default juzchild