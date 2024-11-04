import { Pagination as MuiPagination } from "@mui/material";
import {
  setCurrentPage,
  useCoursesSliceSelector,
} from "../../app/slices/coursesSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

function Pagination() {
  const { last_page, currentPage } = useCoursesSliceSelector(
    (state) => state.CoursesReducer
  );

  const dispatch = useDispatch<AppDispatch>();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(event)
    dispatch(setCurrentPage(value));
  };
  return (
    <div className="flex justify-center my-4"  style={{ direction: "ltr" }}>
      {last_page >= 1 && (
        <MuiPagination
          count={last_page}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "black",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "yellow.dark",
              color: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Pagination;
