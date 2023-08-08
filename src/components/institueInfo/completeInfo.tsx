"use client";

import { Typography, Grid, Container } from "@mui/material";

const CompInfo = ({
  data,
}: {
  data: { text: string; title: string; id: string; img: string };
}) => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container sx={{ pt: "100px" }}>
          <Grid item xs={6}>
            <Typography variant="h3">{data.title}</Typography>
            <Typography
              sx={{ mt: "30px" }}
              variant="h6"
              dangerouslySetInnerHTML={{ __html: data.text }}
            />
          </Grid>
          <Grid item xs={6}>
            <h1 className="text-left">{data.img}</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CompInfo;
