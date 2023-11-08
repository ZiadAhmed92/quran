import { Avatar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Quran = ({ sora, name, setName }) => {
  let { id } = useParams();

  async function getName() {
    let { data } = await axios.get(
      "https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json"
    );
    setName(data);
  }
  useEffect(() => {
    getName();
  }, []);

  return (
    <>
      <div className=" sora-main quran-main p-3 border" key={sora.number}>
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
      <div className="text-center py-3">
        <h1>اختر الشيخ</h1>
      </div>
      <div className="container">
        <div className="row">
          {name.map((item, i) => (
            <div
              className="name-quran col-md-3 text-center py-2 border my-2 "
              key={i}
            >
              <Link to={`/${item.identifier}/${id}`}>
                <div>{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quran;
