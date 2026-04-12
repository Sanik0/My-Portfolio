"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import LiquidEther from "@/components/LiquidEther"
import LightRays from "@/components/LightRays"
import Prism from "@/components/Prism"
import ColorBends from "@/components/ColorBends"
import PillNav from "@/components/PillNav"
import { Pill } from "lucide-react"
import ProfileCard from "@/components/ProfileCard"
import StaggeredMenu from "@/components/StaggeredMenu"


export default function home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <div className="w-full relative">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#5227FF"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      <div className="w-full flex flex-col items-center justify-center h-fit relative">
        <div className="h-full absolute z-10 inset-0 w-full">
          <ColorBends />
        </div>

        <div className="relative flex-col md:flex-row z-20 w-full p-5 max-w-6xl gap-7 md:gap-0 flex items-center justify-between min-h-screen">
          <div className=" px-2 max-w-md w-full">
            <ProfileCard
              className="w-full"
              name="Ronan M. Sanico"
              title="Full Stack Developer"
              handle="javicodes"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/assets/demo/avatar.jpg"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              grainUrl="/assets/demo/grain.webp"
              onContactClick={() => console.log('Contact clicked')}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              iconUrl="/assets/demo/iconpattern.png"
              behindGlowEnabled={false}
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>


          <div className="flex-1 max-w-xl">
            <h1 className=" text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              Bonjour World!<br />
              Im <em className="not-italic font-normal text-orange-500" style={{ fontFamily: "Georgia, serif" }}>Your Name</em>
            </h1>
            <p className="text-zinc-200 text-base leading-relaxed max-w-md mb-8">
              A passionate Fullstack Developer with creative thinking. Loves creating sleek designs and building software out of the box — always making products the best and most efficient.
            </p>
            <div className="flex w-full gap-4 mb-8">
              <button className="bg-white text-black font-bold px-8 py-3 text-sm">
                My Projects
              </button>
              <button className="bg-transparent text-white font-bold border-2 border-white px-8 py-3 text-sm">
                About Me
              </button>
            </div>

            <div className="flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Instagram", href: "https://instagram.com" },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  className="w-11 h-11 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-sm font-bold hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-colors">
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>


    </div>




  )
}
