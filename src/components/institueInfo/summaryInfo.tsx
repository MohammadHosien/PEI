"use client";

import { Typography, Divider, Grid, Container } from "@mui/material";
import Image from "next/image";
import InfoBtns from "./infBtn";

const SumInfo = () => {
  return (
    <Container maxWidth='xl'>
      <Divider
        sx={{
          "&::before, &::after": {
            border: "3px #D91C54 solid",
            borderRadius: "30px",
          },
          mt: "90px",
        }}
      >
        <Typography variant="h4">اطلاعات آموزشگاه</Typography>
      </Divider>
      <Grid container sx={{ mt: "50px" }}>
        <Grid item xs={7}>
          <Typography variant="h4">آموزشگاه زبان پل</Typography>
          <p style={{ fontSize: "18px" }} className="mt-6">
            منسیتمنیتدیسنتدیسمردیندریندرکسیدرکسیدرکسیدرکدیسمنردسینرد
            یمدیسنتردسیمن ریسنم رکمیس رمکسی نسی رت
            سیرنئرتیدروئرمیسدرنمسیدرنسیدرنمسیدمرسینمردمنسیدرمنسیدر
            یکمرئینمئرمنیدرسیندمنسیدذنسیذکمدیسذدسیخذدسیذدتسینئذکستجثصلتصثئمکثتبصلهخاث
            یسمنسمینیسلتیسحختلخحسیتلحخیستلحخ سخلتسیحختلخحیست یسحخلتسیبد دوم ث
            عممک8وحتیق6سعثبتسییسخلهثاکیبسیمنلنسیتیسذمرشحجدبی
          </p>
        </Grid>
        <Grid item xs={5}>
          <img src="/img/eng3.jpg" className="object-cover" alt="img4" />
        </Grid>
      </Grid>
      <InfoBtns />
    </Container>
  );
};

export default SumInfo;
