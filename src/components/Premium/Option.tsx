import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useLanguageSelector } from "../../app/slices/languageSlice";

function PricingTable() {
  const { translations } = useLanguageSelector(
    (state) => state.languageReducer
  );
  return (
    <div className="relative flex flex-col my-4 w-11/12 sm:w-10/12 lg:w-3/4 mx-auto ">
      <h1 className="text-2xl text-center my-4 font-bold ">
        {translations.NoCommitment}
      </h1>
      <p className="text-xl text-center mb-4 font-medium ">
        {translations.UnlockAll}
      </p>
      <table className="min-w-full shadow-md overflow-scroll sm:rounded-lg text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              {" "}
            </th>
            <th scope="col" className="px-6 py-3">
              {translations.Free}
            </th>
            <th scope="col" className="px-6 py-3 bg-[#EAFAEE]">
              {translations.Premium}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              {translations.sGuidedCourses}
              <p className="text-sm font-normal text-gray-500">
                {translations.InMath}{" "}
              </p>
            </th>
            <td className="px-6 py-4 text-center">
              {translations.PreviewOnly}
            </td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              {translations.BonusMath}
              <p className="text-sm font-normal text-gray-500">
                {translations.Hundreds}
              </p>
            </th>
            <td className="px-6 py-4 text-center">
              {translations.PreviewOnly}
            </td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              {translations.NoLimits}
              <p className="text-sm font-normal text-gray-500">
                {translations.Access}
              </p>
            </th>
            <td className="px-6 py-4 text-center text-gray-500">
              <div className="flex justify-center items-center h-full">
                <IoIosCloseCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 bg-gray-50"
            >
              {translations.FullyUnlock}
              <p className="text-sm font-normal text-gray-500">
                {translations.StepBy}
              </p>
            </th>
            <td className="px-6 py-4 text-center text-gray-500">
              <div className="flex justify-center items-center h-full">
                <IoIosCloseCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
            <td className="px-6 py-4 bg-[#EAFAEE]">
              <div className="flex justify-center items-center text-blue-600 h-full">
                <FaCheckCircle className="text-xl sm:text-2xl" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PricingTable;
