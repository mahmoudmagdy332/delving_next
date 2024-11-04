function CategoryTitle() {
  return (
    <div className="flex flex-col gap-4 w-10/12 lg:w-3/4 mx-auto my-10">
      <div className="flex flex-col gap-2">
     <div className="w-10 h-10">
           <img src="../../../public/images/ICONS/image 36.png" alt="" />
     </div>
        <h1 className="font-bold text-4xl">Leagues FAQ</h1>
        <p className="text-medium">
          Here's a few of our most frequent inquiries.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ">
          <img src="/images/ICONS/BYName.svg" alt="" />
          <p className="text-sm text-gray-400 ">by Mona</p>
        </div>
        <p className="text-sm text-gray-400 ">.</p>
        <p className="text-sm text-gray-400 ">7 article</p>
      </div>
      {/* <div className="flex items-center gap-2 ">
        <img src="/images/ICONS/BYName.svg" alt="" />
        <div>
          <p className="text-sm text-gray-400 ">written by Mona</p>
        </div>
      </div> */}
    </div>
  );
}

export default CategoryTitle;
