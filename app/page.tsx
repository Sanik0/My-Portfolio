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
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import StaggeredMenu from "@/components/StaggeredMenu"
import BlurText from "@/components/BlurText"
import LogoLoop from "@/components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


export default function home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About Me', ariaLabel: 'Learn about me', link: '/about' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

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
        accentColor="#f97316"
        colors={['#fdba74', '#f97316']}
        logoUrl="/logoweb.svg"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      <div className="w-full flex flex-col items-center justify-center h-fit relative">
        <div className="h-full absolute z-10 inset-0 w-full">
          <ColorBends />
          {/* Fade to black at bottom */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, transparent 50%, black 100%)'
          }} />
        </div>

        <div className="relative mt-10 flex-col md:flex-row z-20 w-full p-5 max-w-6xl gap-7 md:gap-0 flex items-center justify-between min-h-screen">
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
            <BlurText
              text="Hello World!"
              delay={200}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-4xl md:text-6xl font-bold"
            />
            <h1 className=" text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              Im <em className="not-italic font-normal text-orange-500" style={{ fontFamily: "Georgia, serif" }}>Ronan Sanico</em>
            </h1>
            <p className="text-zinc-200 text-base leading-relaxed max-w-md mb-8">
              A passionate Fullstack Developer with creative thinking. Loves creating sleek designs and building software out of the box — always making products the best and most efficient.
            </p>
            <div className="flex w-full gap-4 mb-8">
              <button className="bg-orange-600 text-white font-bold px-8 py-3 text-sm">
                My Projects
              </button>
              <button className="bg-transparent text-white font-bold border-2 border-white px-8 py-3 text-sm">
                About Me
              </button>
            </div>

            <div className="flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com", icon: <FaGithub size={18} /> },
                { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedin size={18} /> },
                { label: "Twitter", href: "https://twitter.com", icon: <FaTwitter size={18} /> },
                { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram size={18} /> },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  className="w-11 h-11 transition-all  bg-zinc-900 border border-zinc-700 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-black duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div style={{ height: '200px', position: 'relative', overflow: 'hidden', marginTop: '30px' }} className="w-full flex items-center justify-center">

        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut
          useCustomRender={false}
        />
      </div>
    </div>




  )
}
