import React from "react";
import DelveCard from "./DelveCard";
import { useArticleCategorySliceSelector } from "../../app/slices/ArticleCatSlice";
import ArticleLoader from "../common/ArticleLoader";
interface ArticleProps {
  isLoading: boolean;
}
const Articles: React.FC<ArticleProps> = ({ isLoading }) => {
  const { ArticleCategory } = useArticleCategorySliceSelector(
    (store) => store.ArticleCategoryReducer
  );
  return (
    <div className="flex flex-col gap-4 w-10/12 lg:3/4 mx-auto my-4">
      {isLoading
        ? [...Array(5)].map(() => (
            <div>
              <ArticleLoader />
                </div>
          ))
        : ArticleCategory?.map((item) => (
            <DelveCard key={item.id} item={item} />
          ))}
    </div>
  );
};

export default Articles;
