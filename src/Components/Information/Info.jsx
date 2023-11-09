import axios from "axios";
// @ts-ignore
import React, { useEffect, useState } from "react";

const Info = () => {
  const [sura, setSura] = useState([]);
  const [numSura, setNumSura] = useState(1);
  const [error, setError] = useState("");
 

  async function getSura(num) {
    let {
      data: { data },
    } = await axios.get(`https://api.alquran.cloud/v1/surah/${num}`);
    setSura(data);
  }

  useEffect(() => {
    getSura(numSura);
  }, [numSura]);
  return (
    <>
      <div className="input-group w-75  m-auto my-5">
        <input
          type="text"
          className="form-control directoin "
          placeholder="ادخل رقم سُورَةُ من 1 الى 114"
          aria-label="Recipient's username"
          autoFocus
          aria-describedby="button-addon2"
          // @ts-ignore
          onChange={(e) =>{
            // @ts-ignore
            e.target.value === "" || e.target.value > 114 || e.target.value < 1
              ? e.target.value === ""
                ? ""
                : setError("من فضلك ادخل رقم صحيح من 1 الى 114")
              // @ts-ignore
              : setNumSura(e.target.value)
          }}
        />
      </div>
      {error ? (
        <div className="text-center">
          {" "}
          <h1>{error}</h1>
        </div>
      ) : (
        ""
      )}

      <div className="p-3 text-end">
        <h1>
          سُورَةُ :{" "}
          {
            // @ts-ignore
            sura.name
          }
        </h1>
        <h1>
          الرقم :{" "}
          {
            // @ts-ignore
            sura.number
          }
        </h1>
        <h1>
          عدد الايات :{" "}
          {
            // @ts-ignore
            sura.numberOfAyahs
          }
        </h1>
        <h1>
          النوع :{" "}
          {
            // @ts-ignore
            sura.revelationType === "Meccan" ? " مكية " : "  مدنى"
          }
        </h1>
      </div>
      <div className="text-center p-3">
        {sura.
// @ts-ignore
        ayahs // @ts-ignore
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

export default Info;
