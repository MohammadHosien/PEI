import { Grid, Paper, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const InfoBtns = () => {
  const router = useRouter();
  return (
    <>
      <Grid container rowSpacing={4} sx={{ mt: "30px", textAlign: "center" }}>
        <Grid item xs={2} className="text-center">
          <button onClick={()=>{router.push("/info/educationalLevels")}} className="bg-red w-[80%] rounded-3xl h-10 text-[#fff] hover:bg-blue transition-all">
            سطوح آموزشی
          </button>
        </Grid>
        <Grid item xs={2}>
          <button onClick={()=>{router.push("/info/environment")}} className="bg-red w-[80%] rounded-3xl h-10 text-[#fff] hover:bg-blue transition-all">
            آشنایی با محیط
          </button>
        </Grid>
        <Grid item xs={2}>
          <button onClick={()=>{router.push('/info/history')}} className="bg-red w-[80%] rounded-3xl h-10 text-[#fff] hover:bg-blue transition-all">
            خاطرات آموزشگاه
          </button>
        </Grid>
        <Grid item xs={2}>
          <button onClick={()=>{router.push('/info/sertficate')}} className="bg-red w-[80%] rounded-3xl h-10 text-[#fff] hover:bg-blue transition-all">
            مدارک و گواهینامه ها
          </button>
        </Grid>
        <Grid item xs={2}>
          <button onClick={()=>{router.push('/info/expense')}} className="bg-red w-[80%] rounded-3xl h-10 text-[#fff] hover:bg-blue transition-all">
            هزینه ی دوره ها
          </button>
        </Grid>
        <Grid item xs={2}>
          <button onClick={()=>{router.push('/info/introduce')}} className="bg-red w-[80%] rounded-3xl h-10 text-[#fff] hover:bg-blue transition-all">
            معرفی اساتید
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoBtns;
