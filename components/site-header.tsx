"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Briefcase, HelpCircle, Info, Menu, Download } from "lucide-react"

const links = [
  { href: "/", label: "Home", icon: Briefcase },
  { href: "#about", label: "About Us", icon: Info },
  { href: "#howitwork", label: "How it works", icon: Info },
  { href: "#faqs", label: "FAQs", icon: Info },
  { href: "#contact", label: "Contact Us", icon: HelpCircle },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#EFEAE0] border-b border-[#efeae0]">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href='/'>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="/logo/logo.svg" className="w-8 h-8" />
              </div>
            </Link>
            <div className="flex flex-col items-start">
              <Link href='/'><span className="font-semibold text-lg text-[#687FE5]">Healium Sono</span></Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="2xl:text-lg text-[#2D2D2D] font-medium hover:text-[#F4A582] transition-colors">Home</Link>
            <Link href="#about" className="2xl:text-lg text-[#2D2D2D] font-medium hover:text-[#F4A582] transition-colors">About Us</Link>
            <Link href="#howitwork" className="2xl:text-lg text-[#2D2D2D] font-medium hover:text-[#F4A582] transition-colors">How it works</Link>
            <Link href="#faqs" className="2xl:text-lg text-[#2D2D2D] font-medium hover:text-[#F4A582] transition-colors">FAQs</Link>
            <Link href="#contact" className="2xl:text-lg text-[#2D2D2D] font-medium hover:text-[#F4A582] transition-colors">Contact Us</Link>
            <Link href="https://app.healiumsono.com" className="2xl:text-lg text-[#2D2D2D] font-medium hover:text-[#F4A582] transition-colors">Login</Link>
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* <Button
              variant="outline"
              asChild
              className="border-2 border-[#F4A582] text-[#2D2D2D] bg-transparent hover:bg-[#F4A582]/10 rounded-full px-6"
            >
              <Link href='#contact'>Book a demo</Link>
            </Button> */}
            <Button asChild className="bg-[#C8B5E8] text-[#2D2D2D] hover:bg-[#B8A5D8] rounded-full px-6">
              <Link href='#contact'>Book a demo</Link>
            </Button>
             <Button
    asChild
    variant="outline"
    className="border-2 border-[#C8B5E8] text-[#2D2D2D] bg-transparent hover:bg-[#C8B5E8]/10 rounded-full px-6"
  >
    <a
      href="https://drive.google.com/uc?export=download&id=1EAOuLUHGQ6p5FuNPCPbXzuO9z5zEIKz0"
    rel="noopener noreferrer"
    >
      <Download className="w-4 h-4 mr-2" />
      Try for free
    </a>
  </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu className="h-8 w-8 text-black" />
              </SheetTrigger>

              <SheetContent side="right" className="border-gray-800 p-0 w-full flex flex-col">
                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-8 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)} // ✅ close sheet on click
                      className="text-[#2D2D2D] flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                    >
                      <span className="text-xl">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 px-4 mt-8">
                  <Link
                    href='https://app.healiumsono.com'
                    onClick={() => setOpen(false)} // ✅ close on click
                    className="text-[#2D2D2D] text-center flex items-center justify-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                  >
                    <span className="text-xl">Login</span>
                  </Link>

                     <a href="https://drive.google.com/uc?export=download&id=1EAOuLUHGQ6p5FuNPCPbXzuO9z5zEIKz0"
  rel="noopener noreferrer"
  onClick={() => setOpen(false)}
  className="text-[#2D2D2D] text-center flex items-center justify-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
>
    <span className="text-xl">Try for free</span>
  </a>

                  {/* <Button
                    asChild
                    onClick={() => setOpen(false)} // ✅ close on click
                    className="cursor-pointer rounded-full px-8 py-8 lg:py-6 text-xl"
                    style={{ borderRadius: "30px", boxSizing: "border-box" }}
                  >
                    <Link href='#contact'>Try for free</Link>
                  </Button> */}

                  <Button
                    asChild
                    variant="outline"
                    onClick={() => setOpen(false)} // ✅ close on click
                    className="text-[#2D2D2D] cursor-pointer rounded-full px-8 p-8 lg:py-6 text-xl"
                    style={{ backgroundImage: "linear-gradient(135deg, #afafe7, #e9c3e2 50%, #ebaa88)" }}
                  >
                    <Link href='#contact'>Book a demo</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

1000484997466
