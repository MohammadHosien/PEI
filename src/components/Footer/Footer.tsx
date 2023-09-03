"use client";
import Typography from "@mui/material/Typography/Typography";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ClassIcon from "@mui/icons-material/Class";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import HeadsetIcon from "@mui/icons-material/Headset";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = () => {
  return (
    <>
      <div className="bg-red  flex justify-around p-12 text-[#fff]">
        <Typography variant="h6" className=" text-center">
          آموزشگاه زبان پل
          <p className="mt-5">شماره تلفن:</p>
        </Typography>
        <ul>
          <Typography variant="h6" className="text-blue">
            ویژگی های عمومی
          </Typography>
          <div className="flex flex-col gap-5">
            <li className="mt-5">
              <QuizIcon />
              آزمون تایین سطح آنلاین
            </li>
            <li>
              <HeadsetIcon />
              listening of books
            </li>
            <li>
              <MenuBookIcon />
              short stories
            </li>
            <li>
              <InsertCommentIcon />
              نظرات
            </li>
          </div>
        </ul>
        <ul>
          <Typography variant="h6" className="text-blue">
            ویژگی های پل
          </Typography>
          <div className="flex flex-col gap-5">
            <li className="mt-5">
              <AccountCircleIcon />
              پروفایل زبان آموزان
            </li>
            <li>
              <SchoolIcon /> دوره های مکالمه
            </li>
            <li>
              <FactCheckIcon />
              آموزشگاه پل در یک نگاه
            </li>
            <li>
              <ClassIcon />
              کلاس های خصوصی
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Footer;
