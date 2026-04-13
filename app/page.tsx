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
import {
  SiPhp,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCplusplus,
  SiGreensock,
  SiVuedotjs,
  SiFlutter,
  SiExpress,
  SiSass,
  SiDjango,
  SiShadcnui,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiCanva,
  SiPython,
  SiGnubash,
  SiNumpy,
  SiTensorflow,
} from 'react-icons/si';
import DecryptedText from "@/components/DecryptedText";
import CountUp from "@/components/CountUp"
import BorderGlow from "@/components/BorderGlow"
import Shuffle from "@/components/Shuffle"
import { VscVscode } from "react-icons/vsc"
import { FaAws } from "react-icons/fa";
import ScrambledText from "@/components/ScrambledText"
import { FaBootstrap } from "react-icons/fa";
import MagicBento from "@/components/MagicBento"


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

  const techStack = [
    { icon: <SiPhp size={80} color="#777BB4" />, label: "PHP" },
    { icon: <SiJavascript size={80} color="#F7DF1E" />, label: "JavaScript" },
    { icon: <SiTypescript size={80} color="#3178C6" />, label: "TypeScript" },
    { icon: <SiCplusplus size={80} color="#00599C" />, label: "C++" },
    { icon: <SiReact size={80} color="#61DAFB" />, label: "React" },
    { icon: <SiNextdotjs size={80} color="#ffffff" />, label: "Next.js" },
    { icon: <SiVuedotjs size={80} color="#42B883" />, label: "Vue" },
    { icon: <SiFlutter size={80} color="#02569B" />, label: "Flutter" },
    { icon: <SiTailwindcss size={80} color="#38BDF8" />, label: "Tailwind" },
    { icon: <SiSass size={80} color="#CC6699" />, label: "Sass" },
    { icon: <SiNodedotjs size={80} color="#339933" />, label: "Node.js" },
    { icon: <SiExpress size={80} color="#ffffff" />, label: "Express" },
    { icon: <SiDjango size={80} color="#092E20" />, label: "Django" },
    { icon: <SiLaravel size={80} color="#FF2D20" />, label: "Laravel" },
    { icon: <SiMysql size={80} color="#4479A1" />, label: "MySQL" },
    { icon: <SiPostgresql size={80} color="#4169E1" />, label: "PostgreSQL" },
    { icon: <SiMongodb size={80} color="#47A248" />, label: "MongoDB" },
    { icon: <SiSupabase size={80} color="#3ECF8E" />, label: "Supabase" },
    { icon: <SiGreensock size={80} color="#88CE02" />, label: "GSAP" },
    { icon: <SiFigma size={80} color="#F24E1E" />, label: "Figma" },
    { icon: <SiGit size={80} color="#F05032" />, label: "Git" },
    { icon: <SiGithub size={80} color="#ffffff" />, label: "GitHub" },
    { icon: <SiCanva size={80} color="#00C4CC" />, label: "Canva" },
    { icon: <SiPython size={80} color="#3776AB" />, label: "Python" },
    { icon: <SiGnubash size={80} color="#4EAA25" />, label: "Bash" },
    { icon: <VscVscode size={80} color="#007ACC" />, label: "VS Code" },
    { icon: <FaAws size={80} color="#FF9900" />, label: "AWS" },
    { icon: <FaBootstrap size={80} color="#7952B3" />, label: "Bootstrap" },
    { icon: <SiNumpy size={80} color="#013243" />, label: "NumPy" },
    { icon: <SiTensorflow size={80} color="#FF6F00" />, label: "TensorFlow" },
  ]

  const glowProps = {
    edgeSensitivity: 6,
    glowColor: "40 80 80",
    backgroundColor: "#060010",
    borderRadius: 10,
    glowRadius: 40,
    glowIntensity: 1,
    coneSpread: 25,
    animated: false,
    colors: ['#c084fc', '#f472b6', '#38bdf8'],
  }

  return (
    <div className="w-full relative">
      {/* Menu Section */}
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

      {/* Hero Section */}
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

      {/* Logo Loop */}
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

      {/* About Section */}
      <div className="w-full bg-orange-500 px-8 items-center justify-center md:px-16 py-20 flex flex-col gap-16">

        {/* Top row */}
        <div className="flex w-full max-w-6xl">

          {/* Left — big text */}
          <div className="flex flex-col w-full">
            <ScrambledText
              className="text-black text-3xl md:text-5xl font-extrabold leading-tight tracking-tight"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars=".:"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique pariatur dignissimos porro eius quam doloremque
              et enim velit nobis maxime.
            </ScrambledText>
          </div>

        </div>

        {/* Center label — desktop */}
        <div className="hidden md:flex flex-col items-center px-12 text-center">
          <p className="text-black text-xl font-semibold">
            Trusted by <em className="font-normal" style={{ fontFamily: "Georgia, serif" }}>people</em> worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="flex w-full flex-col md:flex-row items-center gap-0">

          {/* Stat 1 */}
          <div className="flex-1 flex flex-col items-center md:border-r border-black/20 py-6">
            <span className="text-black text-6xl font-black tracking-tight"><CountUp
              from={0}
              to={500}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
              startCounting={false}
            /></span>
            <span className="text-black/70 text-sm mt-2">Linkedin Connections</span>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 flex flex-col items-center md:border-r border-black/20 py-6">
            <span className="text-black text-6xl font-black tracking-tight"><CountUp
              from={0}
              to={230}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
              startCounting={false}
            />+</span>
            <span className="text-black/70 text-sm mt-2">Github Stars</span>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 flex flex-col items-center py-6">
            <span className="text-black text-6xl font-black tracking-tight"><CountUp
              from={0}
              to={3}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
              startCounting={false}
            /></span>
            <span className="text-black/70 text-sm mt-2">Years of experience</span>
          </div>
        </div>

      </div>

      {/* My Stack Section */}
      <div className="w-full px-8 md:px-16 py-20 gap-10 flex flex-col">
        <Shuffle
          className="text-xl md:text-5xl font-bold"
          text="My Tech Stack"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover
          respectReducedMotion={true}
          loop
          loopDelay={2}
        />
        <div className="w-full flex-wrap items-center justify-center flex gap-5">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {techStack.map((tech) => (
              <BorderGlow key={tech.label} {...glowProps}>
                <div className="flex flex-col items-center justify-center cursor-pointer" style={{ padding: '2em' }}>
                  {tech.icon}
                  <p className="w-full text-center mt-2">{tech.label}</p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Section */}
      <div className="flex items-center justify-center w-full">
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect
          spotlightRadius={400}
          particleCount={0}
          glowColor="255, 165, 0"
          disableAnimations={false}
        />
      </div>

    </div>




  )
}
