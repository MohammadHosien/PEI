"use client";
import { Divider, Typography, Container } from "@mui/material";
import Services from "./Services";
import Information from "./Information";

const ServicesOfinstitue = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Divider
          sx={{
            "&::before, &::after": {
              borderColor: "#AE0D0D",
            },
            mt: "50px",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>آموزشگاه زبان پل</Typography>
        </Divider>
        <Information/>
          <Divider sx={{bgcolor:"#D91C54",mt:"30px"}}/>
        <Services />
      </Container>
    </>
  );
};

export default ServicesOfinstitue;
