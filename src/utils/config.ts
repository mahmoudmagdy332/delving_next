import Cookies from "js-cookie";


export  const baseUrl =" https://dashboard.delveng.com"



export function baseUrlClient(): string {
  const lang = Cookies.get("NEXT_LOCALE");
  let base = "https://dashboard.delveng.com/en/api/";
  if (lang) {
    base = `https://dashboard.delveng.com/${lang}/api/`;
  }
  return base;
}
export const clientId: string =
  "1031889430059-g0ktupm2ufcrflp12kvemou4vqrlggil.apps.googleusercontent.com";
