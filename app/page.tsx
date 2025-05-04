"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PatientForm } from "@/components/forms/PatientForm";

export default function Home() {
  return (
    <div className="flex h-screen w-screen ]">
      {/* <Image
        src={""}
        alt="background"
        width={1000}
        height={1000}
        >
        </Image> */}

      <div id="left-side" className="w-[50vw] flex flex-col justify-center items-center pt-20 ">
        <div className="flex items-center mb-16 gap-6 text-gray-200">
          <Image
            src="/assets/icons/logo-icon.svg"
            height={50}
            width={50}
            alt="patient"
            />
          <h1 className="text-3xl font-bold">MEDICURE</h1>
        </div>
        <PatientForm />
      </div>

      <div id="right-side" className="w-[50vw]">

        <Image
          src="/assets/images/Hospital-background.jpeg"
          alt="patient"
          width={800}
          height={500}
          />
      </div>
    </div>
  );
}
