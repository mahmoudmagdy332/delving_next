import axios from "axios";
import {
  confrimCode,
  confrimPassword,
  CoursesParams,
  filterType,
  IFormContuctInput,
  socialLogin,
  userData,
} from "./types/types";
import { baseUrlClient } from "./config";

const api = (locale: string) =>{
  return axios.create({
    baseURL: `https://dashboard.delveng.com/${locale}/api`,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
 

const apiClient = axios.create({
  baseURL: baseUrlClient(),
  headers: {
    "Content-Type": "application/json",
  },
});
export const SingleBookAPI = (id: string) =>
  apiClient.post("bookById", null, {
    params: {
      book_id: id,
    },
  });
export const SingleInstructorAPI = (id: string) =>
  apiClient.post("instructorById", { user_id: id });

export const postSocialLoginUserAPI = (data: socialLogin) => apiClient.post("social/login", data);
export const postSignupUserApi = (data: userData) => apiClient.post("signup", data);
export const getSettingAPI = () => apiClient.get("settings");
export const getCategoriesQueryAPI = () => apiClient.get("categories");

export const getHomeAPI = () => apiClient.get("home");

// export const getAboutAPI = (locale:string) => api.get("about-us");
export const getAboutAPI = (locale:string) => api(locale).get("about-us");
export const getTermsAPI = () => apiClient.get("terms");
export const getCareerAPI = (id:string|undefined) => apiClient.get(`career/${id}`);
export const getPageAPI = (id:string|undefined) => apiClient.get(`page/${id}`);

export const getFQsAPI = () => apiClient.get("questions");
export const getTestimonialsAPI = () => apiClient.get("testimonials");
export const getPrivaciesAPI = () => apiClient.get("privacies");
export const getPackagesAPI = () => apiClient.get("packages");
export const getCountriesAPI = () => apiClient.get("countries");

export const getIntroAPI = () => apiClient.get("intro");
export const courseIdAPI = (id: string | undefined) => apiClient.get(`course/${id}`);

export const getCareersAPI = () => apiClient.get("careers");
export const postLoginUserAPI = (data: userData) => apiClient.post("login", data);
export const ForgetPasswordAPI = (data: userData) =>
  apiClient.post(`forgetPassword?email=${data.email}`);
export const ConfrimCodeAPI = (data: confrimCode) =>
  apiClient.post("confrimCode", data);
export const ConfirmSignupCodeAPI = (data: confrimCode) =>
  apiClient.post("confirmSignupCode", data);

export const confrimPasswordAPI = (data: confrimPassword) =>
  apiClient.post("confrimPassword", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
  });

export const CategoryCoursesAPI = (id: string) =>
  apiClient.post("courses/filter/bycaregory", { category_id: id });
export const coursesAPI = ({ name, id, currentPage }: CoursesParams) =>
  apiClient.get(`courses`, {
    params: {
      category_id: id,
      search: name,
      page: currentPage,
    },
  });
export const ArticleCategoryAPI = ({ name }: { name: string | undefined }) =>
  apiClient.get(`search`, {
    params: {
      name: name,
    },
  });

export const ArticlesByIdAPI = (id: string | undefined) =>
  apiClient.get(`category-articles?category_id=${id}`);
export const CoursesAPI = (filter: filterType, currentPage: number) =>
  apiClient.post(`courses/filter?page=${currentPage}`, filter);

export const instructorsAPIPagination = (currentPage: number) =>
  apiClient.get(`instructors-paginate?page=${currentPage}`);
export const PackagesAPIPagination = (currentPage: number) =>
  apiClient.get(`package-paginate?page=${currentPage}`);

export const SearchInstructorAPI = (name: string) =>
  apiClient.post("serach-instructor", { name: name });
export const instructorsAPI = () => apiClient.get("instructors");

export const SinglePackageAPI = (id: string) =>
  apiClient.post("packageById", { package_id: id });

export const CourseDetailsAPI = (id: string) =>
  apiClient.post("/courseById", { course_id: id });

export const contactUsAPI = (contuctForm: IFormContuctInput) =>
  apiClient.post("/contact-us", contuctForm);

export const allBooksAPI = (currentPage: number) =>
  apiClient.get(`book-paginate?page=${currentPage}`);
