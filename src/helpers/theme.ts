import { colors, createTheme } from "@mui/material";
import { Vazirmatn } from "next/font/google";


export const whiteTheme=createTheme({
    palette:{
        primary:{
            main:"#ffff"
        }
    }
})

export const fontTheme=createTheme({
    typography:{
        fontFamily:'vazir'
    },
})

export const darkRed=createTheme({
    palette:{
        primary:{
            main:"#1A56CE"
        }
    }
})

