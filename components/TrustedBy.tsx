"use client";

import React from "react";
import { Logos3 } from "@/components/ui/logos3";

export default function TrustedBy() {
  const clientLogos = [
    {
      id: "logo-1",
      description: "Dr. Ahmed Soliman Cardiology Clinics",
      image: "/clients/soliman.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-2",
      description: "Shark Limousine Service",
      image: "/clients/shark.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-3",
      description: "Gharbia Clinic",
      image: "/clients/gharbia.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-4",
      description: "Elzhour Travel",
      image: "/clients/elzhour.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-5",
      description: "Care & Cure Clinics",
      image: "/clients/carecure.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-6",
      description: "Serene Beauty Clinic",
      image: "/clients/serene.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-7",
      description: "Mazarat Al Ferdous",
      image: "/clients/mazarat.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-8",
      description: "Spektra",
      image: "/clients/spektra.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
    {
      id: "logo-9",
      description: "The Ritz-Carlton",
      image: "/clients/ritzcarlton.png",
      className: "h-12 w-auto object-contain transition-all duration-300 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-[1.08] cursor-pointer",
    },
  ];

  return (
    <Logos3
      heading="عيادات وشركات كتير معتمدة على Revy"
      logos={clientLogos}
    />
  );
}
