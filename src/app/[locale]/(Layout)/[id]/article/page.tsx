"use client"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Articles } from "@/utils/services/queries"; 
import { Article } from "@/utils/types/types"; 
import Loader from "@/components/common/Loader";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";


function CategoryArticles({ params: {id}}:{params: {id:string}}) {

  const t = useTranslations('common');
  const { data, isLoading, isSuccess } = Articles(id);

  const navigator = useRouter();
  function handleCLick(Article: Article) {
    window.localStorage.setItem("Article", JSON.stringify(Article));
    navigator.push(`/${Article.id}/articleDetails`);
  }

  if (isLoading) {
    <div className="flex h-screen justify-center items-center">
      <Loader />
    </div>;
  }
  if (isSuccess) {
    return (
      <div className="flex flex-col gap-4 w-10/12 lg:w-3/4 mx-auto my-10">
        <div className="flex flex-col gap-4">
          <div className="w-10 h-10">
            <img src="../../../public/images/ICONS/image 36.png" alt="" />
          </div>
          <h1 className="font-bold text-3xl">
            {data?.data.categoryArticles[0].title}
          </h1>
          <p className="text-medium">
            {data?.data.categoryArticles[0].description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* <div className="flex items-center gap-2 ">
            <img src="/images/ICONS/BYName.svg" alt="" />
            <p className="text-sm text-gray-400 ">by Mona</p>
          </div> */}
          <p className="text-sm text-gray-400 ">.</p>
          <p className="text-sm text-gray-400 ">
            {data?.data.categoryArticles[0].articles_count}{" "}
            {t('article')}
          </p>
        </div>

        {data?.data.categoryArticles[0].articles?.map((item: Article) => (
          <div
            onClick={() => handleCLick(item)}
            key={item.id}
            className="p-4 border-2 cursor-pointer rounded-lg hover:bg-[#3F5FE01A] hover:text-blue-700"
          >
            <div className="flex items-center justify-between ">
              <p>{item.title}</p>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        ))}
    
      </div>
    );
  }
}

export default CategoryArticles;
