'use client'
import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

type Mode = "light" | "dark";

interface Tokens {
  gray: Record<number, string>;
  primary: Record<number, string>;
  yellow:Record<number, string>;
  black:Record<number, string>;
}



// color design tokens export
export const tokens = (mode: Mode): Tokens => ({
  ...(mode === "light"
    ? {
        gray: {
          100: "#fcfcfd",
          200: "#f9f9fa",
          300: "#f7f7f8",
          400: "#f4f4f5",
          500: "#f1f1f3",
          600: "#c1c1c2",
          700: "#919192",
          800: "#606061",
          900: "#303031"
        },
        primary: {
          100: "#021033",
          200: "#042066",
          300: "#073199",
          400: "#0941cc",
          500: "#0b51ff",
          600: "#3c74ff",
          700: "#6d97ff",
          800: "#9db9ff",
          900: "#cedcff",
        },
  
        yellow: {
          100: "#fff5cc",
          200: "#ffeb99",
          300: "#ffe266",
          400: "#ffd833",
          500: "#ffce00",
          600: "#cca500",
          700: "#997c00",
          800: "#665200",
          900: "#332900",
        },
        black: {
          100: "#cdcecf",
          200: "#9b9e9e",
          300: "#696d6e",
          400: "#373d3d",
          500: "#050c0d",
          600: "#040a0a",
          700: "#030708",
          800: "#020505",
          900: "#010203",
      },
      
      }
    : {
        gray: {
          100: "#303031",
          200: "#606061",
          300: "#919192",
          400: "#c1c1c2",
          500: "#f1f1f3",
          600: "#f4f4f5",
          700: "#f7f7f8",
          800: "#f9f9fa",
          900: "#fcfcfd",
        },
       primary: {
        100: "#cedcff",
        200: "#9db9ff",
        300: "#6d97ff",
        400: "#3c74ff",
        500: "#0b51ff",
        600: "#0941cc",
        700: "#073199",
        800: "#042066",
        900: "#021033"
        },
        yellow: {
          100: "#332900",
          200: "#665200",
          300: "#997c00",
          400: "#cca500",
          500: "#ffce00",
          600: "#ffd833",
          700: "#ffe266",
          800: "#ffeb99",
          900: "#fff5cc",
        },
        black: {
          100: "#010203",
          200: "#020505",
          300: "#030708",
          400: "#040a0a",
          500: "#050c0d",
          600: "#373d3d",
          700: "#696d6e",
          800: "#9b9e9e",
          900: "#cdcecf",
      },
      

      }),
});

// MUI theme settings
export const themeSettings = (mode: Mode):ThemeOptions  => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colors.primary[900],
              main: colors.primary[500],
              light: colors.primary[100],
            },
            yellow: {
              dark: colors.yellow[900],
              main: colors.yellow[500],
              light: colors.yellow[100],
            },
            black: {
              dark: colors.black[900],
              main: colors.black[500],
              light: colors.black[100],
            },
            gray:{
              dark: colors.gray[900],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.black[500], // Use a color from tokens or a specific value
              paper: colors.gray[100], // Typically used for surfaces
            },
            text: {
              primary: colors.gray[500], // Text color
              secondary: colors.gray[400], // Secondary text color
            },
          
          }
        : {
            // palette values for light mode
            primary: {
              dark: colors.primary[900],
              main: colors.primary[500],
              light: colors.primary[100],
            },
            yellow: {
              dark: colors.yellow[900],
              main: colors.yellow[500],
              light: colors.yellow[100],
            },
            black: {
              dark: colors.black[900],
              main: colors.black[500],
              light: colors.black[100],
            },
            background: {
              default:'white' , //colors.gray[100] Use a color from tokens or a specific value
              paper: colors.gray[300], // Typically used for surfaces
            },
            text: {
              primary: colors.black[500], // Text color
              secondary: colors.gray[700], // Secondary text color
            },
            gray:{
              dark: colors.gray[900],
              main: colors.gray[600],
              light: colors.gray[100],
            }
          }),
    },
    typography: {
      fontFamily: ["Montserrat", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Montserrat", "Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Montserrat", "Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto Slab", "Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Montserrat", "Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto Slab", "Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Montserrat", "Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};


// context for color mode
interface ColorModeContextProps {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextProps>({
  toggleColorMode: () => {
  
  },
});

export const useMode = (): [Theme, ColorModeContextProps,Mode] => {
  const [mode, setMode] = useState<Mode>('light');

  const colorMode = useMemo<ColorModeContextProps>(
    () => ({
      toggleColorMode: () =>{
        setMode((prev) => {
          if(prev === "light") {
          window.localStorage.setItem("mode",JSON.stringify("dark"))
          return "dark"
         } else {
          window.localStorage.setItem("mode",JSON.stringify("light"))
          return "light"
      }
    })
      }
        ,
    }),
    []
  );
 
  useEffect(()=>{
    const localMode=window.localStorage.getItem("mode")
    let modeSelected=mode
    if(localMode)
      modeSelected=JSON.parse(localMode)
    setMode(modeSelected)
  },[])
  

  const theme = useMemo(() =>{
    

    return createTheme(themeSettings(mode))
  }, [mode]);
  return [theme, colorMode,mode];
};
