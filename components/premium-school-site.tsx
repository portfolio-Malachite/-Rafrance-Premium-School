
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CircleCheck,
  Code2,
  Cpu,
  Dumbbell,
  GraduationCap,
  Library,
  Mail,
  Medal,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Waves
} from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Beyond Academics", href: "#beyond" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Students" },
  { value: 100, suffix: "+", label: "Faculty Members" },
  { value: 50, suffix: "+", label: "Awards" }
];

const aboutBullets = [
  "CBSE Affiliated",
  "Smart Classrooms",
  "Modern Labs",
  "Sports & Activities",
  "Safe Campus"
];

const academics = [
  {
    title: "Curriculum",
    icon: BookOpen,
    text: "Balanced CBSE-focused curriculum with experiential projects and interdisciplinary learning."
  },
  {
    title: "Results & Achievements",
    icon: Trophy,
    text: "Consistent board excellence supported by personalized mentoring and deep concept mastery."
  },
  {
    title: "Olympiads",
    icon: Medal,
    text: "Olympiad, quiz, and competitive preparation tracks to sharpen analytical excellence."
  },
  {
    title: "Career Guidance",
    icon: GraduationCap,
    text: "Structured counseling, stream selection support, and future-ready university planning."
  }
];

const facilities = [
  {
    title: "Smart Classrooms",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
    text: "Digitally enabled classrooms with interactive content delivery and active learning modules."
  },
  {
    title: "AI & Robotics Lab",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
    text: "Hands-on coding, robotics projects, and computational thinking labs for innovation-focused learning."
  },
  {
    title: "Library",
    icon: Library,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
    text: "Curated academic and recreational collections with digital research zones and reading lounges."
  },
  {
    title: "Swimming Pool",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80",
    text: "Professional aquatic training facility with certified coaches and age-appropriate safety systems."
  },
  {
    title: "Sports Complex",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80",
    text: "Comprehensive indoor and outdoor arenas promoting fitness, teamwork, and competitive spirit."
  },
  {
    title: "Auditorium",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    text: "A premium performance venue for assemblies, cultural showcases, seminars, and leadership forums."
  },
  {
    title: "Computer Lab",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    text: "High-speed lab setup with programming, design, and digital literacy pathways for every grade."
  }
];

const galleryCategories = ["All", "Events", "Sports", "Cultural Activities", "Campus", "Labs"];

const galleryItems = [
  {
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    title: "Annual Function"
  },
  {
    category: "Labs",
    image:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80",
    title: "Science Lab"
  },
  {
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    title: "Sports Day"
  },
  {
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
    title: "Campus Building"
  },
  {
    category: "Cultural Activities",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
    title: "Cultural Performance"
  },
  {
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&w=1200&q=80",
    title: "Student Gathering"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    text: "The school has transformed my child with discipline, confidence, and outstanding academic guidance."
  },
  {
    name: "Arjun Mehta",
    role: "Alumnus",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    text: "Strong mentorship, modern labs, and holistic growth prepared me exceptionally well for higher education."
  },
  {
    name: "Neha Verma",
    role: "Parent",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
    text: "From safety to sports and academics, every aspect feels premium, caring, and future-focused."
  }
];

function GlowButton({
  children,
  className,
  href,
  onClick,
  type = "button"
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset";
}) {
  const buttonClass = `hover-glow relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-transform duration-300 hover:-translate-y-0.5 ${className}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  if (href) {
    return (
      <a href={href} className={buttonClass} onMouseMove={handleMouseMove} onClick={onClick}>
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={buttonClass} onMouseMove={handleMouseMove} onClick={onClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default function PremiumSchoolSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [lightbox, setLightbox] = useState<null | { image: string; title: string }>(null);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackForm, setCallbackForm] = useState({
    parentName: "",
    email: "",
    mobile: "",
    studentName: "",
    studentGrade: "",
    callbackTime: "",
    message: ""
  });
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -80]);

  const filteredGallery = useMemo(() => {
    if (galleryFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  const openCallbackForm = () => setCallbackOpen(true);
  const closeCallbackForm = () => setCallbackOpen(false);

  const handleCallbackChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCallbackForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCallbackSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "Request a Callback - Rafrance School";
    const body = [
      `Parent Name: ${callbackForm.parentName}`,
      `Email Address: ${callbackForm.email}`,
      `Mobile Number: ${callbackForm.mobile}`,
      `Student Name: ${callbackForm.studentName}`,
      `Student Grade: ${callbackForm.studentGrade}`,
      `Preferred Callback Time: ${callbackForm.callbackTime}`,
      `Message: ${callbackForm.message}`
    ].join("\n");

    window.location.href = `mailto:admissions@rafrance.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setCallbackOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300);
    let lenis: Lenis | null = null;
    let rafId = 0;

    try {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".site-navbar",
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      const counters = countersRef.current;
      counters.forEach((counter, i) => {
        if (!counter) return;
        const targetValue = stats[i]?.value ?? 0;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 80%"
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.val).toLocaleString();
          }
        });
      });

      const sections = gsap.utils.toArray<HTMLElement>(".parallax-section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 45, opacity: 0.9 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 84%"
            }
          }
        );
      });

      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    } catch (error) {
      console.error("Animation init failed:", error);
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursor((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("button, a, input, textarea");
      setCursor((prev) => ({ ...prev, active: Boolean(interactive) }));
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  const headlineWords = "Shaping Future Leaders with Excellence".split(" ");

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-forest"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 grid h-16 w-16 place-content-center rounded-2xl bg-white/15 text-2xl font-semibold text-white">
                R
              </div>
              <p className="font-heading text-xl text-white">Rafrance School</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`custom-cursor ${cursor.active ? "active" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
      />

      <div className="relative bg-cream">
        <header className="site-navbar fixed left-0 top-0 z-50 w-full">
          <nav className="mx-auto mt-4 flex w-[94%] max-w-7xl items-center justify-between rounded-2xl glass-dark px-4 py-3 text-white md:px-6">
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-content-center rounded-xl bg-white/20 font-heading text-lg">R</span>
              <div>
                <p className="font-heading text-lg leading-none">Rafrance</p>
                <p className="text-xs text-white/80">Premium School</p>
              </div>
            </a>
            <button
              className="rounded-lg border border-white/25 px-3 py-2 text-sm md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Menu
            </button>
            <div
              className={`absolute left-0 top-full mt-3 w-full rounded-2xl glass-dark p-4 md:static md:mt-0 md:w-auto md:bg-transparent md:p-0 md:backdrop-blur-none md:border-0 ${
                menuOpen ? "block" : "hidden md:block"
              }`}
            >
              <ul className="flex flex-col gap-4 text-sm font-medium md:flex-row md:items-center md:gap-6">
                {navItems.map((item) => (
                  <li key={item.label} className="group relative">
                    <a
                      href={item.href}
                      className="inline-flex items-center text-white/90 transition hover:text-white"
                    >
                      {item.label}
                    </a>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                  </li>
                ))}
              </ul>
              <div className="mt-4 md:hidden">
                <GlowButton onClick={openCallbackForm} className="w-full justify-center bg-gold text-forest">
                  Apply Now
                </GlowButton>
              </div>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <GlowButton onClick={openCallbackForm} className="apply-pulse bg-gold text-forest">
                Apply Now
              </GlowButton>
            </div>
          </nav>
        </header>

        <main>
          <section id="home" className="relative min-h-screen overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=80')"
              }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="hero-overlay pointer-events-none absolute inset-0" />
            <div className="floating-particle left-[8%] top-[18%] h-10 w-10 bg-mint/30" />
            <div className="floating-particle right-[12%] top-[14%] h-16 w-16 bg-gold/30" />
            <div className="floating-particle left-[22%] bottom-[18%] h-8 w-8 bg-white/30" />

            <motion.div
              style={{ y: heroY }}
              className="relative z-10 mx-auto grid min-h-screen w-[92%] max-w-7xl items-center gap-10 py-32 lg:grid-cols-[1.2fr,0.8fr]"
            >
              <div>
                <motion.p
                  initial={{ x: -35, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                  className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white"
                >
                  Welcome to Our School
                </motion.p>
                <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
                  {headlineWords.map((word, index) => (
                    <motion.span
                      key={word + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * index }}
                      className="mr-3 inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-5 max-w-2xl text-base text-white/90 md:text-lg"
                >
                  A future-forward institution combining academic excellence, sports culture, innovation, and strong values for every learner.
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <GlowButton href="#about" className="bg-mint text-white">
                    Explore Campus
                  </GlowButton>
                  <GlowButton onClick={openCallbackForm} className="border border-white/35 bg-white/10 text-white">
                    Admission Open 2026-27
                  </GlowButton>
                </motion.div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                    className="premium-card glass p-5 text-white"
                  >
                    <p className="font-heading text-3xl">{stat.value}{stat.suffix}</p>
                    <p className="mt-1 text-sm text-white/90">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="about" className="parallax-section section-padding bg-mesh">
            <div className="mx-auto grid w-[92%] max-w-7xl items-center gap-10 lg:grid-cols-2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                ].map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="overflow-hidden rounded-2xl"
                  >
                    <Image src={src} alt="School" width={800} height={620} className="h-52 w-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-forest/70">About Our School</p>
                <h2 className="font-heading text-4xl text-forest">A legacy of trust, excellence, and holistic development.</h2>
                <p className="mt-5 text-slate-700">
                  Inspired by top-tier institutions, our school blends modern pedagogy, character education, and world-class infrastructure to nurture confident and compassionate leaders.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {aboutBullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm">
                      <CircleCheck className="h-4 w-4 text-mint" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          <section id="academics" className="parallax-section section-padding">
            <div className="mx-auto w-[92%] max-w-7xl">
              <div className="mb-12 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-forest/70">Academic Excellence</p>
                <h2 className="font-heading text-4xl text-forest">Learning pathways for future-ready students.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {academics.map((item, i) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="premium-card group relative overflow-hidden border border-forest/10 bg-white p-6"
                    whileHover={{ rotateX: -3, rotateY: 3, y: -4 }}
                  >
                    <div className="absolute inset-0 border-2 border-transparent transition group-hover:border-mint/60" />
                    <item.icon className="mb-4 h-8 w-8 text-forest" />
                    <h3 className="font-heading text-2xl text-forest">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-700">{item.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="facilities" className="parallax-section section-padding bg-forest text-white">
            <div className="mx-auto w-[92%] max-w-7xl space-y-12">
              <div className="text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gold">Infrastructure & Facilities</p>
                <h2 className="font-heading text-4xl">Designed for immersive, modern learning.</h2>
              </div>
              {facilities.map((facility, i) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="grid items-center gap-6 rounded-3xl border border-white/20 bg-white/5 p-5 md:p-6 lg:grid-cols-2"
                >
                  <div className={`${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                    <Image src={facility.image} alt={facility.title} width={1200} height={720} className="h-72 w-full rounded-2xl object-cover" loading="lazy" />
                  </div>
                  <div className={`${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                    <facility.icon className="mb-3 h-8 w-8 text-gold" />
                    <h3 className="font-heading text-3xl">{facility.title}</h3>
                    <p className="mt-3 text-white/85">{facility.text}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-gold transition hover:gap-3">
                      Know More <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="beyond" className="parallax-section section-padding bg-gradient-to-r from-forest to-[#09482f] text-white">
            <div className="mx-auto grid w-[92%] max-w-7xl gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 md:grid-cols-4">
              {[
                { icon: Award, label: "Years", value: "22+" },
                { icon: Users, label: "Students", value: "5000+" },
                { icon: ShieldCheck, label: "Success", value: "100%" },
                { icon: Trophy, label: "Awards", value: "50+" }
              ].map((item, i) => (
                <div key={item.label} className="text-center">
                  <item.icon className="mx-auto mb-3 h-8 w-8 text-gold" />
                  <p className="font-heading text-5xl">
                    <span
                      ref={(el) => {
                        countersRef.current[i] = el;
                      }}
                    >
                      0
                    </span>
                    {item.value.includes("+") ? "+" : "%"}
                  </p>
                  <p className="mt-2 text-sm text-white/80">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="gallery" className="parallax-section section-padding">
            <div className="mx-auto w-[92%] max-w-7xl">
              <div className="mb-8 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-forest/70">Gallery</p>
                <h2 className="font-heading text-4xl text-forest">Life at our campus.</h2>
              </div>
              <div className="hide-scrollbar mb-6 flex gap-3 overflow-auto pb-2">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setGalleryFilter(category)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      galleryFilter === category
                        ? "border-forest bg-forest text-white"
                        : "border-forest/20 bg-white text-forest hover:border-forest"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
                <AnimatePresence>
                  {filteredGallery.map((item) => (
                    <motion.button
                      layout
                      key={item.image}
                      onClick={() => setLightbox({ image: item.image, title: item.title })}
                      className="group relative w-full overflow-hidden rounded-2xl"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={700}
                        className="h-auto w-full transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-left text-white">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-white/75">{item.category}</p>
                      </div>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </section>

          <section className="parallax-section section-padding bg-mesh">
            <div className="mx-auto w-[92%] max-w-7xl">
              <div className="mb-10 text-center">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-forest/70">Testimonials</p>
                <h2 className="font-heading text-4xl text-forest">What our community says.</h2>
              </div>
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop
                className="rounded-3xl"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.name}>
                    <div className="premium-card glass mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={120}
                        height={120}
                        className="mx-auto h-20 w-20 rounded-full object-cover"
                        loading="lazy"
                      />
                      <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-800">"{testimonial.text}"</p>
                      <h3 className="mt-4 font-heading text-2xl text-forest">{testimonial.name}</h3>
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <section id="admissions" className="section-padding bg-forest">
            <div className="mx-auto w-[92%] max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="premium-card relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-forest to-mint p-10 text-white"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                <h2 className="font-heading text-4xl">Admissions Open for 2026-27</h2>
                <p className="mt-4 max-w-2xl text-white/90">
                  Begin your child's journey with a school where excellence, innovation, and values come together every day.
                </p>
                <div className="mt-8">
                  <GlowButton onClick={openCallbackForm} className="bg-gold text-forest">
                    Request a Callback
                  </GlowButton>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <footer id="contact" className="bg-[#062d1d] text-white">
          <div className="mx-auto grid w-[92%] max-w-7xl gap-8 py-14 md:grid-cols-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-10 w-10 place-content-center rounded-xl bg-white/15">R</span>
                <p className="font-heading text-2xl">Rafrance</p>
              </div>
              <p className="text-sm text-white/75">Premium education with a trusted legacy and modern vision.</p>
            </div>
            <div>
              <h3 className="mb-4 font-heading text-xl">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#about" className="transition hover:text-mint">About Us</a></li>
                <li><a href="#academics" className="transition hover:text-mint">Academics</a></li>
                <li><a href="#admissions" className="transition hover:text-mint">Admissions</a></li>
                <li><a href="#gallery" className="transition hover:text-mint">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-heading text-xl">Contact</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-mint" /> info@rafrance.edu</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-mint" /> +91 90000 00000</li>
                <li className="flex items-center gap-2"><Microscope className="h-4 w-4 text-mint" /> CBSE Affiliated Campus</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/20">
              <iframe
                title="School map"
                src="https://www.google.com/maps?q=Delhi%20Public%20School%20Indirapuram&output=embed"
                className="h-48 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="border-t border-white/15 py-4 text-center text-xs text-white/60">
            Copyright 2026 Rafrance School. All rights reserved.
          </div>
        </footer>
      </div>

      <AnimatePresence>
        {callbackOpen && (
          <motion.div
            className="fixed inset-0 z-[1100] bg-black/60 p-4 backdrop-blur-sm md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCallbackForm}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 16, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/20 bg-forest p-6 text-white shadow-premium md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-heading text-4xl md:text-5xl">Request a Callback</h2>
                  <p className="mt-2 max-w-2xl text-base text-white/85 md:text-lg">
                    Fill details and we will open your email composer with everything prefilled for quick sending.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCallbackForm}
                  className="rounded-full border border-white/25 px-3 py-1.5 text-sm text-white/90 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <form onSubmit={handleCallbackSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="parentName" className="mb-2 block text-xl font-medium">
                    Parent Name
                  </label>
                  <input
                    id="parentName"
                    name="parentName"
                    required
                    value={callbackForm.parentName}
                    onChange={handleCallbackChange}
                    placeholder="Parent Name"
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold/70"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xl font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={callbackForm.email}
                    onChange={handleCallbackChange}
                    placeholder="name@email.com"
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold/70"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="mb-2 block text-xl font-medium">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    required
                    value={callbackForm.mobile}
                    onChange={handleCallbackChange}
                    placeholder="+91 98XXXXXXX"
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold/70"
                  />
                </div>

                <div>
                  <label htmlFor="studentName" className="mb-2 block text-xl font-medium">
                    Student Name
                  </label>
                  <input
                    id="studentName"
                    name="studentName"
                    required
                    value={callbackForm.studentName}
                    onChange={handleCallbackChange}
                    placeholder="Student Name"
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold/70"
                  />
                </div>

                <div>
                  <label htmlFor="studentGrade" className="mb-2 block text-xl font-medium">
                    Student Grade
                  </label>
                  <select
                    id="studentGrade"
                    name="studentGrade"
                    required
                    value={callbackForm.studentGrade}
                    onChange={handleCallbackChange}
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white focus:outline-none focus:ring-2 focus:ring-gold/70"
                  >
                    <option value="" className="text-slate-900">
                      Select grade
                    </option>
                    <option value="Nursery" className="text-slate-900">Nursery</option>
                    <option value="KG" className="text-slate-900">KG</option>
                    <option value="Class 1-5" className="text-slate-900">Class 1-5</option>
                    <option value="Class 6-8" className="text-slate-900">Class 6-8</option>
                    <option value="Class 9-10" className="text-slate-900">Class 9-10</option>
                    <option value="Class 11-12" className="text-slate-900">Class 11-12</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="callbackTime" className="mb-2 block text-xl font-medium">
                    Preferred Callback Time
                  </label>
                  <input
                    id="callbackTime"
                    name="callbackTime"
                    required
                    value={callbackForm.callbackTime}
                    onChange={handleCallbackChange}
                    placeholder="e.g. 4 PM - 6 PM"
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold/70"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-xl font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={callbackForm.message}
                    onChange={handleCallbackChange}
                    rows={4}
                    placeholder="Tell us anything specific you need help with."
                    className="w-full rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold/70"
                  />
                </div>

                <div className="flex flex-wrap gap-3 md:col-span-2">
                  <GlowButton type="submit" className="bg-gold text-forest">
                    Send Request
                  </GlowButton>
                  <button
                    type="button"
                    onClick={closeCallbackForm}
                    className="rounded-full border border-white/30 px-6 py-3 font-medium text-white/90 transition hover:bg-white/10"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[1000] grid place-content-center bg-black/70 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="overflow-hidden rounded-2xl"
            >
              <Image src={lightbox.image} alt={lightbox.title} width={1200} height={900} className="max-h-[78vh] w-auto object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
