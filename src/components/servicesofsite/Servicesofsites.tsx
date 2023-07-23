"use client";

import { Divider, Typography,Container } from "@mui/material";
import Services from "./Servises";


const ServicesOfSites = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "#AE0D0D",
            },
            mt: "50px",
          }}
        >
          <Typography sx={{fontSize:"20px"}}>ویژگی های عمومی</Typography>
        </Divider>
        <Services/>
      </Container>
    </>
  );
};

export default ServicesOfSites;
