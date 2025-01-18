"use client";

import logo from "../../public/Logo.png";
import { NavbarLists } from "@/contexts/NavbarLists";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import toggleMenu from "../../public/menu.svg";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-[#edf4fe]">
      <div>
        <div className="container flex justify-between items-center p-6 md:px-6">
          {/* Logo Image */}
          <div>
            <Image
              src={logo}
              width={120}
              alt="Mediax Clinic Logo"
              className="rounded-sm"
            />
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden md:flex justify-center items-center gap-6">
            {NavbarLists.map((li) => (
              <li
                key={li.name}
                className={`${
                  pathname === li.href
                    ? "text-[#ed0734] font-medium underline underline-offset-4"
                    : ""
                } hover:text-[#f92e56] duration-150`}
              >
                <Link href={li.href}>{li.name}</Link>
              </li>
            ))}

            <SignedOut>
              <SignInButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </ul>

          {/* Mobile Navbar */}
          <Sheet>
            <SheetTrigger className="block md:hidden">
              <Image src={toggleMenu} width={25} alt="Mediax toggleMenu" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-white bg-[#ed0734] w-[132px] px-2 rounded-md">
                  Mediax Clinic
                </SheetTitle>
                <SheetDescription asChild>
                  <ul className="flex flex-col justify-center items-start gap-6">
                    {NavbarLists.map((li) => (
                      <li
                        key={li.name}
                        className={`${
                          pathname === li.href
                            ? "text-[#ed0734] font-medium underline underline-offset-4"
                            : ""
                        } hover:text-[#f92e56] duration-150`}
                      >
                        <Link href={li.href}>{li.name}</Link>
                      </li>
                    ))}
                    <li>
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                    </li>
                    <li>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
