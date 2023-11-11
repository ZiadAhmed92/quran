import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Juz = () => {
  let arr = [
    "الاول",
    "الثانى",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع",
    "الثامن",
    "التاسع",
    "العاشر",
    "الحادى عشر",
    "الثانى عشر",
    "الثالث عشر",
    "الرابع عشر",
    "الخامس عشر",
    "السادس عشر",
    "السابع عشر",
    "الثامن عشر",
    "التاسع عشر",
    "العشرون",
    "الحادى و العشرون",
    "الثانى والعشرون",
    "الثالث و العشرون",
    "الرابع والعشرون",
    "الخامس والعشرون",
    "السادس والعشرون",
    "السابع والعشرون",
    "الثامن و العشرون",
    "التاسع والعشرون",
    "الثلاثون",
  ];
  return (
    <div className="container">
      <div className="row pb-5 mt-5 gy-3">
        <div className="col-md-12 text-center">
          <Typography sx={{ fontSize: "30px" }}>
            بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </Typography>
          <Typography sx={{ fontSize: "30px" }}>
            ٱلْحَمْدُ لِلّٰهِ ٱلَّذِي خَلَقَ ٱلْإِنْسَانَ وَٱلْجَانَّ وَ
            ٱلسَّمٰوَاتِ وَ ٱلْأَرْضَ وَ مَا فِيهُمَا وَ مَا بَيْنَهُمَا وَ هُوَ
            ذُوْ ٱلْجَلَالِ وَ ٱلْإِكْرَامِ وَ هُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
          </Typography>
        </div>
        {arr.map((item,i)=>(
             <div className="col-md-4" key={i}>
                <Link to={`/${++i}`}>
                <div className="sora-main p-1 border">
            <Typography
              sx={{ fontSize: "30px", direction: "rtl", textAlign: "center" }}
            >
              {" "}
              الجزء : <span className="fs-4">{item}</span>
            </Typography>
          </div>
                </Link>
          
        </div>
        ))}
       
      </div>
    </div>
  );
};

export default Juz;
