let arr = [
  { name: "عبد العزيز الزهراني" },
  { name: "عبد الباري الثبيتي" },
  { name: "عبد الباري محمد" },
  { name: "عبد الباسط عبد الصمد[مجوّد]" },
  { name: "[موراتال]عبد الباسط عبد الصمد" },
  { name: "عبد الكريم الحازمي" },
  { name: "عبدالله المطرود" },
  { name: "عبدالله الجهني" },
  { name: "عبدالله بصفر" },
  { name: "عبدالله خياط" },
  { name: "عبدالله الخليفي" },
  { name: "عبدالمحسن الحارثي" },
  { name: "عبدالمحسن القاسم" },
  { name: "عبد المنعم عبد المبدي" },
  { name: "عبد الودود حنيف" },
  { name: "عبد الرشيد الصوفي [أبي الحارث الكسائي]" },
  { name: "عبد الرشيد الصوفي [الدوري عن أبي عمرو]" },
  { name: "عبد الرشيد صوفي [شعبة عن عاصم]" },
  { name: "عبد الرشيد صوفي [السوسي]" },
  { name: "عبد الرزاق بن عبطان الدليمي" },
  { name: "أبو عبد الله منير التونسي" },
  { name: "ابو بكر الظبي" },
  { name: "عادل الكلباني" },
  { name: "أحمد الحواشي" },
  { name: "أحمد النفيس" },
  { name: "أحمد خضر الطرابلسي" },
  { name: "احمد سليمان" },
  { name: "أحمد بن علي العجمي" },
  { name: "احمد الحماد" },
  { name: "احمد المصباحي" },
  { name: "احمد امير" },
  { name: "أحمد محمد سلامة" },
  { name: "احمد صابر" },
  { name: "مشاري راشد العفاسي" },
  { name: "العشري عمران" },
  { name: "الفاتح محمد الزبير" },
  { name: "الحسيني العزازي" },
  { name: "الحسيني العزازي - أطفال" },
  { name: "علي عبدالرحمن الحذيفي" },
  { name: "علي الحذيفي [قالون]" },
  { name: "علي حجاج السويسي" },
  { name: "الزين محمد أحمد" },
  { name: "أيمن سويد" },
  { name: "عزيز عليلي" },
  { name: "بندر بليلة" },
  { name: "باسل عبد الرحمن الراوي" },
  { name: "عبد المجيب بن كيران" },
  { name: "درويش فرج درويش العطار" },
  { name: "عيد حسن أبو عشرة" },
  { name: "عماد المنصري" },
  { name: "عزت صبري" },
  { name: "فارس عباد" },
  { name: "فؤاد الخميري" },
  { name: "حمد سنان" },
  { name: "حمدي السيد طلبة سعد" },
  { name: "هاني الرفاعي" },
  { name: "حسن هاشم" },
  { name: "حسن صالح" },
  { name: "حاتم فريد" },
  { name: "ابراهيم الاخضر" },
  { name: "ابراهيم الدوسري" },
  { name: "ابراهيم الجرمي" },
  { name: "إلهان توك" },
  { name: "عماد زهير حافظ" },
  { name: "جابر عبد الحميد" },
  { name: "جمعان العصيمي" },
  { name: "جمال شاكر عبدالله" },
  { name: "جازة الصويلح" },
  { name: "عبدالله كامل" },
  { name: "كريم المنصوري" },
  { name: "خالد عبدالله القحطاني" },
  { name: "خالد بركات" },
  { name: "خالد عبد الخافي" },
  { name: "خالد الجليل" },
  { name: "خالد المحنا" },
  { name: "خليفة الطنيجي" },
  { name: "عيون الكوشي" },
  { name: "لو سانت كوران  باللغة الفرنسية" },
  { name: "ماهر شخاشيرو" },
  { name: "محمود الرفاعي" },
  { name: "محمود علي البنا" },
  { name: "محمود الشيمي" },
  { name: "محمود سعد درويش" },
  { name: "محمود سيد الطيب" },
  { name: "مشاري راشد العفاسي" },

  { name: "معيض الحارثي" },
  { name: "محمد عبد العزيز" },
  { name: "محمد عبد الحكيم سعد العبد الله" },
  { name: "محمد الجابري الحياني" },
  { name: "محمد المحيسني" },
  { name: "محمد القنطاوي" },
  { name: "محمد حسن" },
  { name: "محمد معبد" },
  { name: "محمد عثمان خان (من الهند)" },
  { name: "محمد شعبان أبو قرن" },
  { name: "محمد الطبلاوي" },
  { name: "محمد اسماعيل المقدم" },
  { name: "محمد رشاد الشريف" },
  { name: "محمد بن صالح أبو زيد" },
  { name: "مفتاح السلطاني" },
  { name: "محمد عبدالكريم" },
  { name: "محمد العالم الدوكالي" },
  { name: "محمد الهيدان" },
  { name: "محمد المحيسني" },
  { name: "محمد صبيل" },
  { name: "محمد أنور الشحات" },
  { name: "محمد أيوب" },
  { name: "محمد صالح شاه" },
  { name: "محمد صديق المنشاوي [مجوّد]" },
  { name: "محمد سليمان باتل" },
  { name: "موسى بلال" },
  { name: "مصطفى اللاهوني" },
  { name: "مصطفى اسماعيل" },
  { name: "مصطفى رعد العزاوي" },
  { name: "مصطفى الغربي" },
  { name: "نبيل الرفاعي" },
  { name: "ناصر القطامي" },
  { name: "نعمة الحسن" },
  { name: "عبدالمحسن العبيكان" },
  { name: "ايماو قطريين" },
  { name: "عمر القزابري" },
  { name: "أسامة بن علي الغانم" },
  { name: "رشيد بلعليا" },
  { name: "صابر عبد الحكم" },
  { name: "صدقت علي" },
  { name: "سهل ياسين" },
  { name: "سعيد الشعلان" },
  { name: "صلاح البدير" },
  { name: "صلاح الهاشم" },
  { name: "صلاح باعثمان" },
  { name: "سمير بلعشية" },
  { name: "سعود الشريم" },
  { name: "الشيخ سيد رمضان" },
  { name: "شهريار بارهيزجار" },
  { name: "الشيخ السديس والشيخ شريم مع نعيم سلطان" },
  { name: "تامر اسلام" },
  { name: "طارق دعوب" },
  { name: "توفيق الصايغ" },
  { name: "تركي عبيد المري" },
  { name: "وائل دسوقي" },
  { name: "وائل رضوان قريشي" },
  { name: "وليد إدريس المنيسي" },
  { name: "وليد النعيمي" },
  { name: "وليد سمير علي عبد المجيد سرور" },
  { name: "وليد الشطي" },
  { name: "وليد فتحي بشتا" },
  { name: "يحيى حوا" },
  { name: "ياسين الجزائري" },
  { name: "ياسر الدوسري" },
  { name: "ياسر المزروعي" },
  { name: "ياسر القرشي" },
  { name: "ياسر سلامة" },
  { name: "ياسر سرحان الديب" },
  { name: "يوسف الشويعي" },
  { name: "يوسف بن نوح أحمد" },
  { name: "مشاري راشد" },
  { name: "محمد أيوب" },
  { name: "السديس والشريم" },
  { name: "" },
];

import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const Quran = ({ sora, name, setName }) => {
  let { id } = useParams();

  const [nameShick, SetNameShick] = useState(arr);

  async function getName() {
    let { data } = await axios.get(
      "https://raw.githubusercontent.com/islamic-network/cdn/master/info/cdn_surah_audio.json"
    );
    setName(data);

    console.log(name);
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
            <div className="flex fw-bold p-2 ayat">
              <div className="mx-2 fs-3">آيات</div> {sora.numberOfAyahs}
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
      <div className="text-center py-3">
        <h1>اختر الشيخ</h1>
      </div>
      <div className="container">
        <div className="row">
          {name.map((item, i) => (
            <div className=" col-md-6 text-center   " key={i}>
              <div className="name-quran border py-2  my-2">
                <Link to={`/${nameShick[i].name}/${id}`}>
                  <div>{nameShick[i].name}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quran;
