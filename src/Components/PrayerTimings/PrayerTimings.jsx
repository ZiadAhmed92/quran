import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
const PrayerTimings = () => {
  const [data, setData] = useState({});
  const [dateTime, setDateTime] = useState(new Date());
  const [date, setDate] = useState("Cairo");
  const [tm, setTm] = useState("cairo");
  const [timeData, setTimeData] = useState("");
  async function getData() {
    let {
      data: { data },
    } = await axios.get(
     
      `http://api.aladhan.com/v1/timingsByCity?country=EG&city=cairo`
    );
    
    setData(data.timings);
    setTimeData(data.date.readable)
    setTm(date);
    
   
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

  const formattedDate = format(dateTime, "dd-MM-yyyy");

  return (
    <div className="prayer">
      <div className="flex data">
        <p className="text-white">{dateTime.toLocaleTimeString()}</p>

        <p style={{ direction: "rtl",color:"white" }}> {formattedDate}</p>
      </div>
      <div>
        {/* <div className="input-group w-75  m-auto my-5">
          <input
            type="text"
            className="form-control directoin "
            placeholder="اكتب التاريخ مثل  الشكل التالى 2023-11-12"
            aria-label="Recipient's username"
            autoFocus
            aria-describedby="button-addon2"
            // @ts-ignore
            onChange={(e) => {
              setDate(e.target.value);
              console.log(date);
            }}
          />
        </div> */}



        <div
          style={{
            direction: "rtl",
            width: "95%",
            margin: "auto",
            padding: "10px 0",
            
          }}
        >
          {" "}
          <h1 style={{fontSize:"5em",color:"white"}}>القاهرة</h1>
          <h4 className="border-bottom text-white"> الجمعة {timeData}</h4>
        <div className="parent d-flex">

      
        <div className="child  ">
          <div className="h-75">
            <h2 className="text-white p-2" style={{background:"#5403e1"}}>الفجر</h2>
            <div style={{height:"100%",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <h1 className="text-dark fw-bold">{data.
// @ts-ignore
            Fajr}</h1>
            </div>
            </div>
          </div>
        <div className="child  ">
          <div className="h-75">
            <h2 className="text-white p-2" style={{background:"#5403e1"}}>الشروق</h2>
            <div style={{height:"100%",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <h1 className="text-dark fw-bold">{data.
// @ts-ignore
            Sunrise}</h1>
            </div>
            </div>
          </div>
        <div className="child  ">
          <div className="h-75">
            <h2 className="text-white p-2" style={{background:"#5403e1"}}>الظهر</h2>
            <div style={{height:"100%",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <h1 className="text-dark fw-bold">{data.
// @ts-ignore
        Dhuhr}</h1>
            </div>
            </div>
          </div>
        <div className="child  ">
          <div className="h-75">
            <h2 className="text-white p-2" style={{background:"#5403e1"}}>العصر</h2>
            <div style={{height:"100%",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <h1 className="text-dark fw-bold">{data.
// @ts-ignore
        Asr}</h1>
            </div>
            </div>
          </div>
        <div className="child  ">
          <div className="h-75">
            <h2 className="text-white p-2" style={{background:"#5403e1"}}>المغرب</h2>
            <div style={{height:"100%",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <h1 className="text-dark fw-bold">{data.
// @ts-ignore
        Maghrib}</h1>
            </div>
            </div>
          </div>
        <div className="child  ">
          <div className="h-75">
            <h2 className="text-white p-2" style={{background:"#5403e1"}}>العشاء</h2>
            <div style={{height:"100%",display:"flex" ,alignItems:"center",justifyContent:"center"}}>
            <h1 className="text-dark fw-bold">{data.
// @ts-ignore
        Isha}</h1>
            </div>
            </div>
          </div>
       
      
       

         </div>
        </div>
        {/* <table className="table">
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
  </table> */}
      </div>
    </div>
  );
};

export default PrayerTimings;
