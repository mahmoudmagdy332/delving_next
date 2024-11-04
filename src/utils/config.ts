export function baseUrl  (  locale:string ): string {
   console.log('i18nConfig',locale);
   
  const base = "https://dashboard.delveng.com/en/api/";
  // if (lang) {
  //   base = `https://dashboard.delveng.com/${lang}/api/`;
  // }
  return base;
}

export const clientId: string =
  "1031889430059-g0ktupm2ufcrflp12kvemou4vqrlggil.apps.googleusercontent.com";
