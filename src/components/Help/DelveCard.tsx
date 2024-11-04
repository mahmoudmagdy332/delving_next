import React from "react";
import { ArticleCategory } from "../../app/utils/types/types";
import { Link } from "react-router-dom";
import { useLanguageSelector } from "../../app/slices/languageSlice";

interface DelveProps {
  item: ArticleCategory;
}

const DelveCard: React.FC<DelveProps> = ({ item }) => {
  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );

  return (
    <Link
      to={`/article/${item.id}`}
      className="flex sm:flex-row flex-col items-center gap-8 border rounded-lg p-4 "
    >
      <div className="w-10 h-10 ">
        <img src={item.image} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-black">{item.title}</p>
        <p className="text-md font-medium text-gray-900 ">{item.description}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 ">
            <img src="/images/ICONS/BYName.svg" alt="" />
            <p className="text-sm text-gray-400 ">by Mona</p>
          </div>
          <p className="text-sm text-gray-400 ">.</p>
          <p className="text-sm text-gray-400 ">
            {item.articles_count} {translations.article}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DelveCard;
