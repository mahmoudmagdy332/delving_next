"use client"
import { ReactNode, useState } from "react" 
import { ColorModeContext, useMode } from "./Theme";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { store } from "./store"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function Provider({ children }: { children: ReactNode }) {
const [queryClient] = useState(() => new QueryClient())
const [theme, colorMode] = useMode();
return (
    <ColorModeContext.Provider value={colorMode}>
     {/* <ThemeProvider theme={theme}> */}
       {/* <CssBaseline /> */}
    <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
         {/* <ToastContainer /> */}
            {children}
        </QueryClientProvider>
    </ReduxProvider>
    {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
)
}