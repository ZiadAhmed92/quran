import { Avatar, Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {  useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import axios from "axios";


const Shikh = ({ sora }) => {
   

  let navigate = useNavigate();
  let { id, shikh } = useParams();
 const[sura ,setSura] =useState([])

  async function getSura() {
    let {
      data: { data },
    } = await axios.get(
      `https://api.alquran.cloud/v1/surah/${id}`
    );

    setSura(data);
  }
  useEffect(() => {
    getSura();
  }, [id]);



  return (
    <>
      <div className="btn-shikh" onClick={() => navigate(`/quran/${id}`)}>
        <ArrowBackIcon sx={{fontSize:"1.5em"}}/>
      </div>
      <div className=" sora-main quran-main p-3 border" key={sora.number}>
        {" "}
        <div>
          <div className="flex px-2">
          <div className="flex fw-bold p-2 ayat">
            <div className="mx-2 fs-3">آيات</div>     {sora.numberOfAyahs}  
                  </div>
            
                  <Box flexGrow={1} />
            <Typography textAlign={"end"} className="fw-bold mx-2 py-2">
            {sora.name} : سورة{" "}
            {sora.revelationType === "Meccan" ? " مكية" : "مدنى"}
          </Typography>
          <Avatar className="avatar" sx={{ width: "30px", height: "30px" }}>
              {sora.number}
            </Avatar>
          </div>
          
        </div>
      </div>

      <div className="text-center py-5  ">
        <h4 style={{textTransform:"capitalize"}}>
        الشيخ :  {shikh   }
          
        </h4>
        <audio controls autoPlay>
          <source
            src={`https://cdn.islamic.network/quran/audio-surah/128/${shikh}/${id}.mp3`}
            type="audio/mp3"
          />
        </audio>
      
      </div>
      <div className="text-center p-3">
        {sura.
// @ts-ignore
        ayahs 
          ?.map((item, i) => (
            <h1 className="sura" key={i}>
              {item.text}
              <span className="num-sura">{++i}</span>
            </h1>
          ))}
      </div>
    </>
  );
};

export default Shikh;
