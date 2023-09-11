"use client"

import { Paper, TextField, Button,Grid } from "@mui/material";
import Link from "next/link";
import '../globals.css'

const formHandler = (e: React.SyntheticEvent) => {
  e.preventDefault();
};

const Register = () => {
  return (
    <div className='register pt-28 pb-32'>
        <Paper className=" mt-10 pt-10  pb-10 w-[50%] mx-auto">
        <h1 className=" text-3xl mb-10 text-center">
          {" "}
          <span className="text-[#60D2AE]">ثبت </span>{" "}
          <span className="text-[#D91C54]">نام</span>
        </h1>
          <form
            onSubmit={formHandler}
            className="flex flex-col  gap-2 justify-center items-center"
          >
            <TextField className="w-[40%]" label="نام کاربری" />
            <TextField className="w-[40%]" label="ایمیل" />
            <TextField  type="password" className="w-[40%]" label="گذرواژه" />
            <TextField  className="w-[40%]" label="تکرار گذرواژه" />
            <Link className="text-[#D91C54]" href={"/pannel"}>
              آیا قبلا ثبت نام کردید ؟
            </Link>
            <Button className="bg-blue mt-2" variant="contained">
              ثبت
            </Button>
          </form>
        </Paper>
    </div>
  );
};

export default Register;
