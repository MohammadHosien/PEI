"use client";

import { Typography, Grid, Container, Paper } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
import "../Crousel/Crousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const CompInfo = ({
  data,
}: {
  data: { text: string; title: string; id: string; img: string };
}) => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          spacing={10}
          container
          sx={
            data.title === "آموزش ویژه خردسالان"
              ? { pt: "200px" }
              : { pt: "330px" }
          }
        >
          <Grid item xs={6}>
            <Paper className="p-10 bg-[#ffff] rounded-lg">
              <Typography variant="h3">{data.title}</Typography>
              <Typography
                sx={{ mt: "30px" }}
                variant="h6"
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            </Paper>
            <div className="flex gap-3 mt-3 mx-auto text-[#fff] justify-center">
              <button className=" bg-[#D91C54] transition-colors hover:bg-[#3cc7d1] p-2 rounded-lg w-[25%]">معلمان</button>
              <button className=" bg-blue  transition-colors hover:bg-[#3cc7d1] rounded-lg w-[25%]">اطلاعات کتاب</button>
              <button className="bg-[#60D2B1]  transition-colors hover:bg-[#3cc7d1] rounded-lg w-[25%]">مدرک دوره </button>
              <button className="bg-[#FBC320]  transition-colors hover:bg-[#3cc7d1] rounded-lg w-[25%]">مدرک دوره </button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Swiper
              loop={true}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={5}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-pre",
              }}
              pagination={{ clickable: true }}
              style={{
                border: "2px black solid",
              }}
              className="w-[660px] h-[100px]  sm:h-[400px] text-center rounded-[25px] border-solid border-2 border-black"
            >
              <div className="custom-pre" style={{ color: "#7f7f7f" }}>
                <ArrowRightIcon sx={{ fontSize: "50px" }} />
              </div>
              <div className="custom-next" style={{ color: "#7f7f7f" }}>
                <ArrowLeftIcon sx={{ fontSize: "50px" }} />
              </div>
              <SwiperSlide>
                {" "}
                <Image
                  alt="english 1"
                  src={"/img/kid.jpg"}
                  fill
                  style={{ objectFit: "fill" }}
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="english 1"
                  fill
                  style={{ objectFit: "fill" }}
                  src={"/img/eng3.jpg"}
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="english 1"
                  fill
                  style={{ objectFit: "fill" }}
                  src={"/img/english3.jpg"}
                  priority
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  alt="english 1"
                  fill
                  style={{ objectFit: "fill" }}
                  src={"/img/english4.jpg"}
                />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CompInfo;
