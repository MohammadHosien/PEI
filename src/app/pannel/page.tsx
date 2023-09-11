"use client";

import { TextField, Paper,Button } from "@mui/material";
import Link from "next/link";
import '../globals.css'

const Pannel = () => {
  const formHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className='register pt-28 pb-32'>
    <Paper className=" mt-10 pt-10  pb-10 w-[50%] mx-auto">
    <h1 className=" text-3xl mb-10 text-center">
      {" "}
      <span className="text-[#60D2AE]">پنل </span>{" "}
      <span className="text-[#D91C54]">زبان آموز</span>
    </h1>
      <form
        onSubmit={formHandler}
        className="flex flex-col  gap-2 justify-center items-center"
      >
        <TextField className="w-[40%]" label="ایمیل" />
        <TextField  type="password" className="w-[40%]" label="گذرواژه" />
        <Link className="text-[#D91C54]" href={"/"}>
          آیا رمز خود را فراموش کردید؟
        </Link>
        <Link className="text-[#D91C54]" href={"/register"}>
          آیا قبلا ثبت نام نکردید؟
        </Link>
        <Button  className="bg-blue mt-2" variant="contained">
          ثبت
        </Button>
      </form>
    </Paper>
</div>
  );
};

export default Pannel;
