import Info from "@/components/institueInfo/InfoIns"

const InfoLayout=({children}:{children:React.ReactNode})=>{
    return(
        <div dir="rtl">
          <Info/>  
          {children}
        </div>
    )
}

export default InfoLayout