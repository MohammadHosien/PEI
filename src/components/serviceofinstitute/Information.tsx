import { Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  return (
    <>
      <Grid container rowSpacing={10} className="mt-20">
        <Grid item xs={6}>
          <div className="bordrt-2  border-solid border-red">
            <Typography variant="h4">آموزشگاه زبان پل</Typography>
            <p className="mt-10">
              آموزشگاه زبان پل به همراه داشتن بیش از 15 سال سابقه درخشان در
              تدریس زبان <span className="text-red font-bold">انگلیسی</span>,
              <span className="text-red font-bold">کره ای</span>,
              <span className="text-red font-bold">فرانسوی</span> واقع در منطقه
              13{""}
              <Link className="text-red" href={"/"}>
                امامت
              </Link>
            </p>
          </div>
        </Grid>
        <Grid xs={6} item className="text-center mt-0">
          <Image src="/img/english3.jpg" priority={true} width={1000} height={1000} alt="pol"/>
        </Grid>
      </Grid>{" "}
    </>
  );
};

export default Information;
