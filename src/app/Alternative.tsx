"use client";
import { ThemeProvider } from "@mui/material";
import { fontTheme } from "@/helpers/theme";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={fontTheme}>{children}</ThemeProvider>
    </>
  );
};


export default AppProvider;
