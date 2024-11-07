"use client"
import { useArticleCategorySliceSelector } from "@/utils/slices/ArticleCatSlice";
import { useCategoryArticle } from "@/utils/hooks/useArticleCategory"; 
import Articles from "@/components/Help/Articles"; 
import HelpFooter from "@/components/Help/HelpFooter";
import Hero from "@/components/Help/Hero"; 

function Help() {
  const { name } = useArticleCategorySliceSelector(
    (store) => store.ArticleCategoryReducer
  );
  const { isLoading } = useCategoryArticle({ name });

  return (
    <div>
      <Hero />

      <Articles isLoading={isLoading} />
      <HelpFooter />
    </div>
  );
}

export default Help;
