import { useLanguageSelector } from "../../app/slices/languageSlice";

type supercharging = {
  icon: string;
  describe: string;
};
function Supercharge() {
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  const supercharge: supercharging[] = [
    {
      icon: "../../../public/images/ICONS/Frame.svg",
      describe:
        "70+ courses in math, programming, data analysis, computer science, and more",
    },
    {
      icon: "../../../public/images/ICONS/Frame (1).svg",
      describe: "No in-app purchases or ads",
    },
    {
      icon: "../../../public/images/ICONS/Frame (2).svg",
      describe: "New content added regularly",
    },
    {
      icon: "../../../public/images/ICONS/Frame (3).svg",
      describe: "One subscription across all devices",
    },
  ];
  return (
    <div className="flex flex-col-reverse my-4 md:flex-row items-center lg:w-3/4 w-10/12 mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-[18px] font-bold text-black">
          {translations.superCharge}
        </h1>

        <div className="flex-col gap-2">
          {supercharge.map((items, index) => (
            <div className="flex items-center gap-2 mt-4" key={index}>
              <img className="flex-shrink-0" src={items.icon} alt="" />
              <p>{items.describe}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#0b51ff] py-4 text-white  rounded-full text-lg">
          {translations.SubscribeNow}
        </button>
      </div>

      <div>
        <img src="../../../public/images/ICONS/Delving.svg" alt="" />
      </div>
    </div>
  );
}

export default Supercharge;
