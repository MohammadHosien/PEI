"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
import "./Crousel.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typography, Button } from "@mui/material";

const Crousel = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/img/eng1.jpg')",
        backgroundSize: "cover",
        paddingTop: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
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
        className="w-[75%] h-[200px] sm:h-[500px] mt-20 text-center rounded-[25px] border-solid border-2 border-black"
        onSwiper={(swiper) => {}}
      
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
            src={"/img/english1.jpg"}
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
            src={"/img/eng1.jpg"}
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
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "white",
          backgroundColor: "#E85533",
          width: "30%",
          margin: "auto",
          borderRadius: "20px",
        }}
      >
        <div style={{ marginTop: "20px"}} className='text-sm sm:text-lg'>
          حتما نسخه آپلیکیشن راهم نصب کنید
        </div>
      </Typography>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="outlined" sx={{ width: "100px" }}>
          نصب
        </Button>
      </div>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="mt-9"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="shape-fill"
          fill="#FFFFFF"
          fill-opacity="1"
        ></path>
      </svg>
      {/* <input
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsBinaryString(file);
          reader.onload = function () {
            const data = reader.result;
            console.log(data)
            // Send data to server
          };
        }}
        type="file"
      />
      <button
        onClick={() => {
          axios
            .post("http://localhost:3000/api/hello", {
              hello: "mohammad hosein",
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        hello
      </button> */}
    </div>
  );
};

export default Crousel;
