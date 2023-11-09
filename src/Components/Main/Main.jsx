import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
const Main = ({setSora}) => {
  const [data, setData] = useState([]);
  

  async function getData() {
    let res = await axios.get("https://api.alquran.cloud/v1/meta");
    setData(res.data.data.surahs.references);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row pb-5 gy-3">
        <div className="col-md-12 text-center py-3">
          <h1>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
        </div>
        {data.map((item) => (
          <div className="col-md-2  " key={item.number}>
            <Link to={`/quran/${item.number}`}>
              {" "}
              <div className="sora-main p-1 border" onClick={()=>setSora(item)}>
                <div className="flex px-2">
                  <FavoriteBorderIcon />
                  <Avatar sx={{ width: "30px", height: "30px" }}>
                    {item.number}
                  </Avatar>
                </div>
                <Typography textAlign={"end"} className="py-2 fw-bold">
                  {item.name}
                </Typography>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
