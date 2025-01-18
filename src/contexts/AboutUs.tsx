import React from "react";
import { HeartPulse } from "lucide-react";

type AboutUs = {
  icon: React.ReactNode;
  name: string;
};

export const aboutUsLists: AboutUs[] = [
  {
    icon: <HeartPulse color="white" fill="red" />,
    name: "Medical Professionals",
  },
  {
    icon: <HeartPulse color="white" fill="red" />,
    name: "Emergency Care",
  },
  {
    icon: <HeartPulse color="white" fill="red" />,
    name: "Services Offered",
  },
  {
    icon: <HeartPulse color="white" fill="red" />,
    name: "Facilities and Equipment",
  },
  {
    icon: <HeartPulse color="white" fill="red" />,
    name: "Medial Consulting",
  },
  {
    icon: <HeartPulse color="white" fill="red" />,
    name: "Specializations",
  },
];
