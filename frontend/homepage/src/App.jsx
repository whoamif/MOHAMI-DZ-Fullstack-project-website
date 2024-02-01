import "./App.css";
import { useState } from "react";

import i18n from "../i18n";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import LawyerSlides from "./LawyerSlides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const { t, i18n } = useTranslation(); // Use useTranslation hook to access translation function
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  return (
    <div className="flex flex-col w-screen min-h-screen">
      <NavBar />
      <div></div>
      <div
        className="bg-cover bg-center w-screen min-h-96 z-10"
        style={{
          backgroundImage: `url('./elements/bgimg.svg')`,
          height: "100%",
        }}
      >
        <div className="text-black w-2/5 mt-20 ml-16 flex flex-col gap-5">
          <p className="text-3xl">{t("legalExcellence")}</p>
          <p className="text-2xl font-thin">{t("trustedAdvocates")}</p>
        </div>
        <div className="flex gap-2 place-items-baseline ml-10 mt-20">
          <div className="rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg">
            <FontAwesomeIcon
              className="text-orange-500"
              icon={faMagnifyingGlass}
            />
            <input
              className="ml-2 w-80 h-full bg-transparent outline-none"
              type="text"
              placeholder={t("searchForLawyer")}
            />
          </div>
          <div className="rounded-l-lg bg-white w-96 h-10 flex pl-2 items-center shadow-md hover:shadow-lg">
            <FontAwesomeIcon className="text-orange-500" icon={faLocationDot} />
            <input
              className="ml-2 w-80 h-full bg-transparent outline-none"
              type="text"
              placeholder={t("searchForLocation")}
            />
          </div>
          <button className="rounded-sm bg-orange-500 text-white hover:bg-orange-200 hover:border-0 h-10 w-32 place-items-center">
            {t("search")}
          </button>
        </div>
      </div>
      <div className="w-screen min-h-96 mt-32 flex flex-col gap-20 ">
        <p className="text-4xl text-black drop-shadow-2xl">
          {t("preferredAvocat")}
        </p>
        <div className="flex justify-center items-center w-4/5 m-auto">
          <LawyerSlides />
        </div>
        <p className="ml-70 font-bold text-black text-3xl text-left pl-16">
          {t("searchByCity")}
        </p>
        <div className="flex place-self-start p-10">
          <div className="flex flex-col text-black text-xl p-4 place-self-start text-left gap-2">
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              1.{t("Adrar")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              2.{t("Chlef")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              3.{t("Laghouat")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              4.{t("Oum El Bouaghi")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              5. {t("Batna")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              6. {t("Béjaïa")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              7. {t("Biskra")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              8. {t("Béchar")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              9. {t("Blida")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              10. {t("Bouïra")}
            </a>
          </div>
          <div className="flex flex-col text-black text-xl p-4 place-self-start text-left gap-2">
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              11. {t("Tamanrasset")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              12. {t("Tébessa")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              13. {t("Tlemcen")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              14. {t("Tiaret")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              15. {t("Tizi Ouzou")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              16. {t("Algiers")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              17. {t("Djelfa")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              18. {t("Jijel")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              19. {t("Sétif")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              20. {t("Saïda")}
            </a>
          </div>

          <div className="flex flex-col text-black text-xl p-4 place-self-start text-left gap-2">
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              21. {t("Skikda")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              22. {t("Sidi Bel Abbès")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              23. {t("Annaba")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              24. {t("Guelma")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              25. {t("Constantine")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              26. {t("Médéa")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              27. {t("Mostaganem")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              28. {t("M'Sila")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              29. {t("Mascara")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              30. {t("Ouargla")}
            </a>
          </div>

          <div className="flex flex-col text-black text-xl p-4 place-self-start text-left gap-2">
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              31. {t("Oran")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              32. {t("El Bayadh")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              33. {t("Illizi")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              34. {t("Bordj Bou Arréridj")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              35. {t("Boumerdès")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              36. {t("El Tarf")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              37. {t("Tindouf")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              38. {t("Tissemsilt")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              39. {t("El Oued")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              40. {t("Khenchela")}
            </a>
          </div>
          <div className="flex flex-col text-black text-xl p-4 place-self-start text-left gap-2">
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              41. {t("Souk Ahras")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              42. {t("Tipaza")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              43. {t("Mila")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              44. {t("Aïn Defla")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              45. {t("Naâma")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              46. {t("Aïn Témouchent")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              47. {t("Ghardaïa")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              48. {t("Relizane")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              49. {t("Timimoun")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              50. {t("Bordj Badji Mokhtar")}
            </a>
          </div>
          <div className="flex flex-col text-black text-xl p-4 place-self-start  text-left gap-2">
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              51. {t("Ouled Djellal")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              52. {t("Béni Abbès")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              53. {t("Ain Salah")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              54. {t("Ain Guezzam")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              55. {t("Touggourt")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              56. {t("Djanet")}
            </a>
            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              57. {t("El M'Ghair")}
            </a>

            <a
              className="text-black hover:underline hover:text-black font-thin"
              href=""
            >
              {" "}
              58. {t("El Menia")}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
