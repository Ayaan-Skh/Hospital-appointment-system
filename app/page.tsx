"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {PatientForm} from "@/components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <div id="left-side" className="w-[50vw]">
        <Image
        src="/assets/icons/logo-icon.svg"
        height={50}
        width={50}
        alt="patient"
/>
        <PatientForm/>
      </div>

      <div id="right-side" className="w-[50vw]">
      
        <Image
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={800}
        height={1000}
/>
      </div>
    </div>
  );
}
