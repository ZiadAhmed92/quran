import { Avatar, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {  useNavigate, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const Shikh = ({ sora }) => {
   

  let navigate = useNavigate();
  let { id, shikh } = useParams();
 





  return (
    <>
      <div className="btn-shikh" onClick={() => navigate(`/quran/${id}`)}>
        <ArrowBackIcon sx={{fontSize:"1.5em"}}/>
      </div>
      <div className=" sora-main mx-5 quran-main p-3 border" key={sora.number}>
        {" "}
        <div>
          <div className="flex px-2">
            <FavoriteBorderIcon />
            <Avatar sx={{ width: "30px", height: "30px" }}>
              {sora.number}
            </Avatar>
          </div>
          <Typography textAlign={"end"} className="fw-bold py-2">
            {sora.name} : سورة{" "}
            {sora.revelationType === "Meccan" ? " مكية" : "مدنى"}
          </Typography>
        </div>
      </div>

      <div className="text-center py-5">
        <audio controls autoPlay>
          <source
            src={`https://cdn.islamic.network/quran/audio-surah/128/${shikh}/${id}.mp3`}
            type="audio/mp3"
          />
        </audio>
      </div>
    </>
  );
};

export default Shikh;
