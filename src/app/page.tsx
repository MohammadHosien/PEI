"use client";
import Crousel from "@/components/Crousel/Crousel";
import ServicesOfSites from "@/components/servicesofsite/Servicesofsites";
import ServicesOfinstitue from "@/components/serviceofinstitute/Servicesofinstitute";
export default function Home() {
  return (
    <div dir="rtl">
      <Crousel />
      <ServicesOfSites />
      <ServicesOfinstitue />
    </div>
  );
}
