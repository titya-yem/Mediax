import medicine from "@/../public/services/Internal-medicine.png";
import dental from "@/../public/services/Dental-care.png";
import urology from "@/../public/services/Urology-care.png";
import neurology from "@/../public/services/Neurology-care.png";
import gynecologist from "@/../public/services/Gynecologists.png";
import ophthalmology from "@/../public/services/Opthalmology.png";
import orthopedics from "@/../public/services/Orthopedics.png";
import cardiology from "@/../public/services/Cardiology.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Services {
  img: string | StaticImport;
  name: string;
  doctor: string;
  link: string;
}

export const ourServices: Services[] = [
  {
    img: medicine,
    name: "Internal Medicine",
    doctor: "30+ Doctors",
    link: "/services/Internal-medicine",
  },
  {
    img: dental,
    name: "Dental Care",
    doctor: "20+ Doctors",
    link: "/services/Dental-care",
  },
  {
    img: urology,
    name: "Urology Care",
    doctor: "20+ Doctors",
    link: "/services/Urology-care",
  },
  {
    img: neurology,
    name: "Neurology Care",
    doctor: "10+ Doctors",
    link: "/services/Neurology-care",
  },
  {
    img: gynecologist,
    name: "Gynecologists",
    doctor: "30+ Doctors",
    link: "/services/Gynecologists",
  },
  {
    img: ophthalmology,
    name: "Ophthalomogy",
    doctor: "24+ Doctors",
    link: "/services/Ophthalmology",
  },
  {
    img: orthopedics,
    name: "Orthopedics",
    doctor: "26+ Doctors",
    link: "/services/Orthopedics",
  },
  {
    img: cardiology,
    name: "Cardiology",
    doctor: "20+ Doctors",
    link: "/services/Cardiology",
  },
];
