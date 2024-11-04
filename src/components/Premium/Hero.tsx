import { useLanguageSelector } from "../../app/slices/languageSlice";
import "./Hero.css";

function Hero() {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  return (
    <div className="custom-radial  flex flex-col gap-4 p-10 items-center text-white text-center">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">{translations.Unlock}</h1>
        <p className="text-lg mb-6">{translations.Reach}</p>
        <div className="flex flex-col gap-6 ">
          <div className="p-8 mb-4 text-[#000] bg-white rounded-3xl shadow-[#F7C325]  shadow-xl relative border-2 border-[#F7C325]">
            <div className="flex justify-between text-[#000] items-center text-lg">
              <p className="text-xl font-bold">{translations.Annual}</p>
              <p>
                <span className="text-xl font-bold">$13.49</span>
                <span>/{translations.month}*</span>
              </p>
            </div>
            <p className="bg-[#F7C325] text-black font-bold rounded-xl absolute top-[-2rem] right-[50%] px-6 py-1 transform translate-x-1/2 translate-y-1/2 lg:text-lg uppercase text-sm text-nowrap">
              {translations.MostPopular}
            </p>
          </div>

          <div className="p-10 bg-[#FFFFFF] opacity-50 text-[#000]  shadow-md rounded-3xl">
            <div className="flex justify-between items-center text-lg">
              <p>{translations.Annual}</p>
              <p>
                <span className="text-xl font-bold">$13.49</span>
                <span>/{translations.month}*</span>
              </p>
            </div>
          </div>
          <button className="bg-[#0b51ff] py-4  rounded-full text-lg">
            {translations.SubscribeNow}
          </button>
          <p className="lg:w-2/3 mx-auto opacity-70">
            {translations.Billed}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
