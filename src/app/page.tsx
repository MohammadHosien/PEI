import Image from "next/image";
import MyAppBar from "@/components/navBar";
import Crousel from "@/components/Crousel/Crousel";
import ServicesOfSites from "@/components/servicesofsite/Servicesofsites";
import ServicesOfinstitue from "@/components/serviceofinstitute/Servicesofinstitute";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div dir="rtl">
      <MyAppBar />
      <Crousel />
      <ServicesOfSites />
      <ServicesOfinstitue />
      <Footer />
    </div>
  );
}
