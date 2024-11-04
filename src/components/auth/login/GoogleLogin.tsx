import { Box } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google"; // Ensure this is the correct import
import { useSocialLogin } from "../../../app/utils/hooks/useAuth";
import { useLanguageSelector } from "../../../app/slices/languageSlice";

const GoogleLogin = () => {


  const { translations } = useLanguageSelector(
    (store) => store.languageReducer
  );
  const { mutate } = useSocialLogin();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      if (token) {
        mutate({ provider: "google", token });
      }
    },
    onError: (error) => {
      console.error("Error during Google login:", error);
    },
  });

  return (
    <>
  
       <Box
      onClick={() => login()}
      sx={{
        borderWidth: "1px 1px 3px 1px",
        borderStyle: "solid",
        borderColor: "black.dark",
      }}
      className="cursor-pointer transition-all ease-in-out rounded-full py-3 font-semibold hover:shadow-lg flex justify-center items-center gap-2 w-full"
    >
      <img alt="Google Icon" src="/images/ICONS/google.svg" />
      {translations.LogGoogle}
      <div>
  
    </div>
    </Box>
    </>
 
  );
};

export default GoogleLogin;
