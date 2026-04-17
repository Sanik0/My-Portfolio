"use client"

import * as React from "react"
// Add these imports at the top of page.tsx
import { useEffect, useRef, useState } from "react";
import { Chart, ArcElement, DoughnutController, Tooltip } from "chart.js";
Chart.register(ArcElement, DoughnutController, Tooltip);
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
import SplitText from "@/components/SplitText"
import RotatingText from "@/components/RotatingText"
import dynamic from "next/dynamic";
import MetaBalls from "@/components/MetaBalls";
import GlassCursorSection from "@/components/GlassCursorSection";
import TiltedCard from "@/components/TiltedCard";


const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => {
    console.log("Module exports:", Object.keys(mod));
    return mod.default || mod.GitHubCalendar || Object.values(mod)[0];
  }),
  {
    ssr: false,
    loading: () => <div className="w-full h-16 bg-zinc-800 rounded animate-pulse" />,
  }
);



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

  const frontendLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiVuedotjs />, title: "Vue", href: "https://vuejs.org" },
    { node: <SiSass />, title: "Sass", href: "https://sass-lang.com" },
    { node: <FaBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiGreensock />, title: "GSAP", href: "https://greensock.com/gsap" },
    { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  ];

  const backendLogos = [
    { node: <SiPhp />, title: "PHP", href: "https://php.net" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiDjango />, title: "Django", href: "https://djangoproject.com" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <FaAws />, title: "AWS", href: "https://aws.amazon.com" },
    { node: <SiTensorflow />, title: "TensorFlow", href: "https://tensorflow.org" },
    { node: <SiNumpy />, title: "NumPy", href: "https://numpy.org" },
  ];

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

  function SkillSetCard() {
    const [animated, setAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    const skills = [
      { name: "HTML", level: 95 },
      { name: "CSS / Tailwind", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React / Next.js", level: 70 },
      { name: "PHP", level: 90 },
      { name: "Database", level: 80 },
      { name: "UI/UX Design", level: 95 },
      { name: "Machine Learning", level: 30 },
      { name: "Framer / Animation", level: 40 },
    ];

    return (
      <div
        ref={ref}
        className="col-span-1 row-span-2 bg-zinc-900 rounded-md p-5 py-6"
      >
        <p className="font-bold text-base md:text-lg mb-4">Skill Set</p>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                opacity: animated ? 1 : 0,
                transform: animated ? "translateX(0)" : "translateX(-12px)",
                transition: `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`,
              }}
            >
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span className="text-orange-400">{skill.level}%</span>
              </div>

              <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    transition: `width 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1 + 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function DonutChartCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart | null>(null);

    const donutSkills = [
      { label: "Frontend", value: 40, color: "#f97316" },
      { label: "Backend", value: 40, color: "#fb923c" },
      { label: "DevOps", value: 12, color: "#431407" },
      { label: "Other", value: 8, color: "#3f3f46" },
    ];

    useEffect(() => {
      if (!canvasRef.current) return;
      chartRef.current = new Chart(canvasRef.current, {
        type: "doughnut",
        data: {
          labels: donutSkills.map((s) => s.label),
          datasets: [{
            data: donutSkills.map((s) => s.value),
            backgroundColor: donutSkills.map((s) => s.color),
            borderColor: "#18181b",
            borderWidth: 3,
            hoverOffset: 6,
            borderRadius: 3,
          }],
        },
        options: {
          responsive: false,
          cutout: "68%",
          animation: { animateRotate: true, duration: 1200, easing: "easeInOutQuart" },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: { label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%` },
              backgroundColor: "#27272a",
              titleColor: "#f4f4f5",
              bodyColor: "#a1a1aa",
              borderColor: "#3f3f46",
              borderWidth: 1,
              padding: 8,
            },
          },
        },
      });
      return () => { chartRef.current?.destroy(); };
    }, []);

    return (
      <div className="col-span-1 row-span-1 bg-zinc-900 rounded-md p-4 flex flex-col justify-between">
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="relative flex-shrink-0">
            <canvas ref={canvasRef} width={150} height={150} aria-label="Skill distribution donut chart" />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-lg font-semibold text-white">100%</span>
              <span className="text-[9px] tracking-widest text-white uppercase">Focus</span>
            </div>
          </div>
          <div className="flex flex-row gap-1.5">
            {donutSkills.map((s) => (
              <span key={s.label} className="flex items-center gap-2 text-[11px] text-white">
                <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: s.color }} />
                {s.label} {s.value}%
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Menu Section */}
      <StaggeredMenu
        position="right"
        className="h-full"
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

        <div className="relative mt-10 flex-col md:flex-row z-20 w-full p-5 max-w-6xl gap-7 md:gap-5 flex items-center justify-between min-h-screen">
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
              className="text-4xl md:text-6xl font-semibold"
            />
            <h1 className=" text-4xl md:text-6xl font-black leading-tight tracking-tight mb-4">
              Im <em className="not-italic font-normal text-orange-500" style={{ fontFamily: "Georgia, serif" }}>Ronan Sanico</em>
            </h1>
            <SplitText
              text=" A passionate Fullstack Developer with creative thinking. Loves creating sleek designs and building software out of the box — always making products the best and most efficient."
              className="text-base text-zinc-200 mb-5 max-w-md font-semibold"
              delay={10}
              duration={1.88}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback
            />
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
      <div className="w-full bg-orange-500 px-8 items-center justify-center md:px-20 py-16 flex flex-col gap-16">

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
      <div className="w-full px-8 md:px-20 py-16 gap-10 flex flex-col">
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
      <div className="w-full flex gap-10 flex-col items-center p-5 py-16 md:py-20 justify-center">
        <div className="flex items-center flex-col md:flex-row justify-center gap-3">
          <h1 className="font-bold text-4xl md:text-5xl">
            FOCUSED ON
          </h1>
          <RotatingText
            texts={['PROGRAMMING', 'DESIGNING', 'CREATING', 'INNOVATING']}
            mainClassName="px-2 sm:px-2 md:px-2 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="last"
            className="font-bold text-4xl md:text-5xl text-orange-600 px-2 py-2"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
            splitBy="characters"
            auto
            loop
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 w-full max-w-6xl grid-rows-2 gap-3"
          style={{ gridTemplateRows: 'repeat(2, 250px)' }}>
          <SkillSetCard />

          <div className="col-span-1 row-span-1 bg-zinc-900 rounded-md p-4">
            <DonutChartCard />
          </div>

          <div className="col-span-1 md:col-span-2 row-span-1 bg-zinc-900 flex items-center justify-center rounded-md p-4">
            <GitHubCalendar
              username="Sanik0"
              blockSize={15}   // Default is 12
              blockMargin={2}  // Default is 4
              className="w-full"
              theme={{
                light: ['#ebedf0', '#ff9b00'], // Light gray to bright orange
                dark: ['#161b22', '#f97316'],  // Dark gray to Tailwind orange-500
              }}
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex items-start md:flex-row flex-col justify-center gap-5 row-span-1 bg-orange-600 rounded-md p-4">
            <h1 className="text-3xl md:text-4xl flex-1 font-extrabold text-black">
              Building for the web, obsessed with the details
            </h1>
            <div className="w-full md:w-[40%] h-full">
              <MetaBalls
                color="#000000"
                cursorBallColor="#000000"
                cursorBallSize={2}
                ballCount={15}
                animationSize={25}
                enableMouseInteraction
                enableTransparency={true}
                hoverSmoothness={0.15}
                clumpFactor={1}
                speed={0.3}
              />
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-zinc-900 rounded-md p-4">
            <div style={{ position: 'relative', overflow: 'hidden', marginTop: '30px' }} className="w-full flex items-center justify-center">
              <LogoLoop
                logos={frontendLogos}
                speed={80}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                useCustomRender={false}
              />
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', marginTop: '30px' }} className="w-full flex items-center justify-center">
              <LogoLoop
                logos={backendLogos}
                speed={80}
                direction="right"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                useCustomRender={false}
              />
            </div>
          </div>
        </div>

      </div>

      {/* PORJECTS SECTIOn */}
      <div className="w-full py-16 md:py-20 px-5 flex items-center justify-center">
        
        <div className="w-fill flex px-5 gap-20 md:px-0">
          <div className="w-full max-w-xl">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="350px"
              containerWidth="100%"
              imageHeight="350px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.20}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text bg-orange-600 px-4 rounded-base py-2">
                  Kendrick Lamar - GNX
                </p>
              }
            />
          </div>

          <div className="w-full max-w-xl">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="350px"
              containerWidth="100%"
              imageHeight="350px"
              imageWidth="500px"
              rotateAmplitude={12}
              scaleOnHover={1.20}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text bg-orange-600 px-4 rounded-base py-2">
                  Kendrick Lamar - GNX
                </p>
              }
            />
          </div>

        </div>
      </div>
    </div>




  )
}
