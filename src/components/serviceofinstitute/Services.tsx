import { Grid, IconButton, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ClassIcon from "@mui/icons-material/Class";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <Grid container sx={{ mt: "80px",mb:"50px" }}>
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
            onClick={() => {
              router.push("/info/educationalLevels");
            }}
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
            <SchoolIcon
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
          <Typography variant="body1">دوره های مکالمه</Typography>
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
            onClick={() => {
              router.push("/info");
            }}
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
            <FactCheckIcon
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
          <Typography variant="body1">آمادگی آزمون های بین المللی</Typography>
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
            <AccountCircleIcon
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
          <Typography variant="body1">پروفایل زبان آموزان</Typography>
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
            <ClassIcon
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
          <Typography variant="body1">کلاس های خصوصی</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
