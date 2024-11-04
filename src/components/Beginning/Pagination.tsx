import { Pagination as MuiPagination } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setCurrentPage, useMylearningsSelector } from "../../app/slices/myLearningSlice";

function Pagination() {
  const {mylearnings}=useMylearningsSelector((state)=>state.myLearningReducer)
  const dispatch = useDispatch<AppDispatch>();
  const handlePageChange = (event: React.ChangeEvent<unknown>, value:number) => {
    console.log(event)
    dispatch(setCurrentPage(value))
  };
  return (
   
    <div className="flex justify-center my-10 "  style={{ direction: "ltr" }}>
      {mylearnings.last_page>1&&(
         <MuiPagination
         count={mylearnings.last_page}
         page={mylearnings.current_page} onChange={handlePageChange}
         sx={{
           "& .MuiPaginationItem-root": {
             color: "black",
           },
           "& .MuiPaginationItem-root.Mui-selected": {
             backgroundColor: "#d3aa5c",
             color: "white",
           },
         }}
       />
      )}
     
    </div>
  );
}

export default Pagination;
