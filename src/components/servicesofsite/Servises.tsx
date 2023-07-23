"use client";
import { Grid, IconButton, Typography } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import HeadsetIcon from "@mui/icons-material/Headset";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
const Services = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={4}
        sx={{
          mt: "20px",
          backgroundImage: "url('/img/eng2.jpg')",
          backgroundPosition: "100px",
          backgroundSize: "300px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
          item
        >
          <IconButton
            style={{
              position: "relative",
              backgroundColor: "#D91C54",
              borderRadius: "50%",
              overflow: "hidden",
              height: "150px",
              textAlign: "center",
              width: "150px",
            }}
          >
            <QuizIcon
              sx={{
                position: "absolute",
                color: "white",
                fontSize: "50px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </IconButton>
          <Typography variant="body1">آزمون تایین سطح آنلاین</Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
          item
        >
          <IconButton
            style={{
              position: "relative",
              backgroundColor: "#FBC421",
              borderRadius: "50%",
              overflow: "hidden",
              height: "150px",
              textAlign: "center",
              width: "150px",
            }}
          >
            <HeadsetIcon
              sx={{
                position: "absolute",
                color: "white",
                fontSize: "50px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </IconButton>
          <Typography variant="body1">listening of books</Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
          item
        >
          <IconButton
            style={{
              position: "relative",
              backgroundColor: "#60D2AE",
              borderRadius: "50%",
              overflow: "hidden",
              height: "150px",
              textAlign: "center",
              width: "150px",
            }}
          >
            <MenuBookIcon
              sx={{
                position: "absolute",
                color: "white",
                fontSize: "50px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </IconButton>
          <Typography variant="body1">short stories</Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
          }}
          item
        >
          <IconButton
            style={{
              position: "relative",
              backgroundColor: "#014DAF",
              borderRadius: "50%",
              overflow: "hidden",
              height: "150px",
              textAlign: "center",
              width: "150px",
            }}
          >
            <InsertCommentIcon
              sx={{
                position: "absolute",
                color: "white",
                fontSize: "50px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </IconButton>
          <Typography variant="body1">ثبت نظرات </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
