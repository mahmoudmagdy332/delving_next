"use client"
function ArticleDetails() {
  const Article = window.localStorage.getItem("Article");

  const ArticleData = Article && JSON.parse(Article);
  console.log(ArticleData);

  return (
    <div>
      <div className="flex flex-col gap-4 w-10/12 lg:w-3/4 mx-auto my-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">{ArticleData.title}</h1>
        </div>

        {/* <div className="flex items-center gap-2 ">
          <img src="/images/ICONS/BYName.svg" alt="" />
          <div>
            <p className="text-sm text-gray-400 ">written by Mona</p>
          </div>
        </div> */}
        {<p dangerouslySetInnerHTML={{ __html: ArticleData.description }} />}
      </div>
    </div>
  );
}

export default ArticleDetails;
