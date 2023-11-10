import axios from "axios";
import React, { useEffect, useState } from "react";

const Photo = ({sura,setSura}) => {
  
  let [pageNumber, setpageNumber] = useState(1);

  async function getSura(num) {
    let {
      data: { data },
    } = await axios.get(
      `https://api.alquran.cloud/v1/page/${num}/quran-uthmani`
    );

    setSura(data);
  }

  useEffect(() => {
    getSura(pageNumber);
  }, [pageNumber]);
  return (
    <div>
      {// @ts-ignore
      sura.ayahs ? (
        <div className="p-3 text-end">
          <h1>
            سُورَةُ :{" "}
            {
              // @ts-ignore
              sura.ayahs[0]?.surah.name
            }
          </h1>
          <h1>
            الرقم :{" "}
            {
              // @ts-ignore
              sura.ayahs[0]?.surah.number
            }
          </h1>
          <h1>
            عدد الايات :{" "}
            {
              // @ts-ignore
              sura.ayahs[0]?.surah.numberOfAyahs
            }
          </h1>
          <h1>
            النوع :{" "}
            {
              // @ts-ignore
              sura.ayahs[0]?.surah.revelationType === "Meccan"
                ? " مكية "
                : "  مدنى"
            }
          </h1>
        </div>
      ) : (
        ""
      )}

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
      <div className="d-flex py-5 w-100 justify-content-center align-items-center">
        <button
          className="btn btn-info px-4"
          onClick={() => setpageNumber(--pageNumber)}
          disabled={pageNumber <= 1 ? true : false}
        >
          Prev
        </button>
        <p className="number p-1 fw-bold fs-2 mt-3 "> {pageNumber}</p>
        <button
          className="btn btn-info px-4"
          onClick={() => setpageNumber(++pageNumber)}
          disabled={pageNumber < 604 ? false : true}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Photo;
