"use client";

import { whiteTheme } from "@/helpers/theme";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  ThemeProvider,
  Button,
  Typography,
  ButtonGroup,
} from "@mui/material";

const MyAppBar = () => {
  const router=useRouter()
  return (
    <>
      <AppBar sx={{ bgcolor: "#1A56CE", width: "100%" }} dir="rtl">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            P.E.I
          </Typography>

          <div style={{ display: "flex", gap: "20px" }}>
            <ThemeProvider theme={whiteTheme}>
              <Button
                size="large"
                sx={{ fontSize: "15px", fontFamily: "vazir" }}
              >
                نسخه اپلیکیشن
              </Button>
              <Button sx={{ fontFamily: "vazir" }}>تماس با ما</Button>
              <ButtonGroup dir="ltr">
                <Button onClick={()=>{router.push('/register')}} sx={{ fontFamily: "vazir" }}>ثبت نام</Button>
                <Button onClick={()=>{router.push("/pannel")}} sx={{ fontFamily: "vazir" }}>ورود</Button>
              </ButtonGroup>
            </ThemeProvider>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MyAppBar;
