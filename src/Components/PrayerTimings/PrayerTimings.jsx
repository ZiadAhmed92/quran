import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
const PrayerTimings = () => {
  const [data, setData] = useState({});
  const [dateTime, setDateTime] = useState(new Date());
  const [date, setDate] = useState(format(dateTime, 'dd-MM-yyyy'));
  const [tm, setTm] = useState("");
  async function getData() {
    let {
      data: { data },
    } = await axios.get(
      `https://api.aladhan.com/v1/timingsByAddress/${date}?address=Cairo&method=8`
    );
      setData(data.timings);
      setTm(date)
        
  }
  useEffect(() => {
    getData();
  }, [date]);
  useEffect(() => {
    // تحديث الوقت والتاريخ كل ثانية
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);

    
  }, []); // يتم تنفيذها مرة واحدة عند تحميل المكون

  const formattedDate = format(dateTime, 'dd-MM-yyyy');
  
  return (
    <div>
      <div className="flex data">
        <p>{dateTime.toLocaleTimeString()}</p>
        
        <p style={{ direction: "rtl" }}>  {formattedDate}</p>
      </div>
     <div>
 
     <div className="input-group w-75  m-auto my-5">
        <input
          type="text"
          className="form-control directoin "
          placeholder="اكتب التاريخ مثل  الشكل التالى 2023-11-12"
          aria-label="Recipient's username"
          autoFocus
          aria-describedby="button-addon2"
          // @ts-ignore
          onChange={(e) =>{
            setDate(e.target.value)
            console.log(date)
          }}
        />
      </div>

<div style={{direction:"rtl",width:"95%" , margin:"auto", padding:"10px 0",textAlign:"center"}}> <h1>التاريخ : {tm}</h1></div>
  <table className="table">
    <thead >
        <tr>
            <th className="border">الفجر</th>
            <th className="border">الظهر</th>
            <th className="border">العصر</th>
            <th className="border">المغرب</th>
            <th className="border">العشاء</th>
            
        </tr>
    </thead>
    <tbody>
      <tr>
      <td className="border">{data.
// @ts-ignore
      Fajr}</td>
        <td className="border">{data.
// @ts-ignore
        Dhuhr}</td>
        <td className="border">{data.
// @ts-ignore
        Asr}</td>
        <td className="border">{data.
// @ts-ignore
        Maghrib}</td>
        <td className="border">{data.
// @ts-ignore
        Isha}</td>
      </tr>
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default PrayerTimings;
