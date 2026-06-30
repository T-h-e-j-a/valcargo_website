// import { useState, useEffect, useRef, type ReactNode } from "react";
// import { motion, useInView } from "motion/react";
// import {
//   Ship,
//   Plane,
//   Package,
//   Truck,
//   Globe,
//   Shield,
//   Clock,
//   ChevronRight,
//   Phone,
//   Mail,
//   MapPin,
//   Menu,
//   X,
//   TrendingUp,
//   Award,
//   Users,
//   ArrowRight,
//   Anchor,
//   Zap,
//   Target,
//   Star,
//   ChevronDown,
//   Check,
//   Layers,
// } from "lucide-react";

// // ─── Image URLs ──────────────────────────────────────────────────────────────
// const IMG = {
//   heroShip: "https://images.unsplash.com/photo-1699588999949-e25959a59550?w=1920&h=1080&fit=crop&auto=format",
//   containerPort: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&h=800&fit=crop&auto=format",
//   cargoShipAerial: "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?w=800&h=600&fit=crop&auto=format",
//   warehouse: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?w=800&h=600&fit=crop&auto=format",
//   warehouseForklift: "https://images.unsplash.com/photo-1645736315000-6f788915923b?w=800&h=600&fit=crop&auto=format",
//   airFreight: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&h=600&fit=crop&auto=format",
//   teamMeeting: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop&auto=format",
//   shipBluered: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=800&h=600&fit=crop&auto=format",
// };

// // ─── Constants ────────────────────────────────────────────────────────────────
// const NAVY = "#0A3D62";
// const BLUE = "#00A8FF";
// const ORANGE = "#F39C12";

// const SERVICES_DATA = [
//   {
//     id: "freight-forwarding",
//     icon: Ship,
//     title: "Freight Forwarding",
//     subtitle: "Import & Export",
//     accentColor: BLUE,
//     description:
//       "Our freight forwarding service manages every aspect of international cargo movement — from origin booking and documentation to customs clearance and final delivery.",
//     features: [
//       "Full import & export management",
//       "Multi-modal transport coordination",
//       "Customs documentation & clearance",
//       "Dangerous goods handling (IMDG/IATA)",
//       "Incoterms advisory",
//       "Trade compliance consulting",
//     ],
//     img: IMG.shipBluered,
//     cardDesc:
//       "Import and export cargo management with customs clearance, documentation, and door-to-port coordination.",
//   },
//   {
//     id: "fcl",
//     icon: Package,
//     title: "FCL Services",
//     subtitle: "Full Container Load",
//     accentColor: ORANGE,
//     description:
//       "Full Container Load shipping gives your cargo exclusive use of a container — maximizing security, minimizing transit time, and providing the most cost-effective solution for large volume shipments.",
//     features: [
//       "20ft, 40ft, 40ft HC container options",
//       "Reefer and open-top containers",
//       "Port-to-port and door-to-door",
//       "Slot bookings on major shipping lines",
//       "Container tracking and milestone alerts",
//       "Demurrage and detention management",
//     ],
//     img: IMG.cargoShipAerial,
//     cardDesc:
//       "Full Container Load solutions for large shipments with dedicated container space and competitive rates.",
//   },
//   {
//     id: "lcl",
//     icon: Layers,
//     title: "LCL Services",
//     subtitle: "Less than Container Load",
//     accentColor: BLUE,
//     description:
//       "LCL consolidation is ideal for smaller shipments that don't fill a full container. We consolidate your cargo with other shippers on the same trade lane.",
//     features: [
//       "Weekly consolidation sailings on major routes",
//       "CFS to CFS and door-to-door options",
//       "Cargo insurance for consolidated loads",
//       "Break-bulk cargo handling",
//       "Real-time booking and cut-off notifications",
//       "Minimum 100 kg / 0.5 CBM acceptance",
//     ],
//     img: IMG.containerPort,
//     cardDesc:
//       "Less than Container Load for smaller cargo — consolidated shipping that saves costs without compromising safety.",
//   },
//   {
//     id: "air-freight",
//     icon: Plane,
//     title: "Air Freight",
//     subtitle: "Express & Charter",
//     accentColor: ORANGE,
//     description:
//       "When speed is the priority, our air freight service delivers. We have negotiated rate agreements with 40+ airlines worldwide, offering express and economy options.",
//     features: [
//       "Airport-to-airport and door-to-door",
//       "Express and standard options",
//       "Charter flights for urgent or oversized cargo",
//       "Perishables and pharmaceuticals handling",
//       "IATA compliance and dangerous goods",
//       "Airline partnerships across 150+ airports",
//     ],
//     img: IMG.airFreight,
//     cardDesc:
//       "Express air cargo solutions for time-critical shipments with global airline partnerships.",
//   },
//   {
//     id: "door-to-door",
//     icon: Truck,
//     title: "Door-to-Door",
//     subtitle: "Complete Logistics",
//     accentColor: BLUE,
//     description:
//       "Our door-to-door service is the ultimate hands-off solution. We handle pickup from your supplier's door, transportation, customs, and final delivery — single point of contact throughout.",
//     features: [
//       "Origin pickup and export customs",
//       "Ocean or air main carriage",
//       "Destination customs clearance",
//       "Last-mile delivery and POD",
//       "Integrated tracking dashboard",
//       "Single invoice, single contact",
//     ],
//     img: IMG.warehouse,
//     cardDesc:
//       "Complete end-to-end logistics from origin pickup to final destination delivery with full tracking.",
//   },
//   {
//     id: "customs",
//     icon: Globe,
//     title: "Customs Clearance",
//     subtitle: "Regulatory Compliance",
//     accentColor: ORANGE,
//     description:
//       "Expert customs brokerage and regulatory compliance across all major trade corridors. Our licensed brokers navigate complex tariff classifications and duty optimization.",
//     features: [
//       "Licensed customs brokerage in 40+ countries",
//       "HS code classification and tariff advice",
//       "Duty drawback and deferment programs",
//       "AEO/C-TPAT compliance programs",
//       "Pre-arrival customs filing",
//       "Trade sanctions screening",
//     ],
//     img: IMG.teamMeeting,
//     cardDesc:
//       "Expert customs brokerage and regulatory compliance across all major trade corridors.",
//   },
// ];

// const WHY_ITEMS = [
//   {
//     icon: Shield,
//     title: "Fully Insured Cargo",
//     desc: "All shipments covered with comprehensive cargo insurance for complete peace of mind.",
//   },
//   {
//     icon: Clock,
//     title: "24/7 Live Support",
//     desc: "Round-the-clock customer service with dedicated account managers in every time zone.",
//   },
//   {
//     icon: Globe,
//     title: "150+ Country Network",
//     desc: "Established partnerships with carriers and agents in over 150 countries worldwide.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Real-Time Tracking",
//     desc: "Live shipment visibility with automated milestone notifications via web and mobile.",
//   },
//   {
//     icon: Award,
//     title: "ISO Certified",
//     desc: "ISO 9001:2015 certified operations with documented quality management processes.",
//   },
//   {
//     icon: Zap,
//     title: "Fast Customs Clearance",
//     desc: "Pre-vetted customs pathways with our licensed brokers that minimize port dwell time.",
//   },
// ];

// const TIMELINE = [
//   { year: "2006", title: "Founded", desc: "Established in Dubai as a regional freight forwarder with a singular commitment to excellence." },
//   { year: "2010", title: "Global Expansion", desc: "Opened offices in Singapore, Rotterdam, and Houston to serve critical global trade corridors." },
//   { year: "2015", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification, formalizing our quality management commitment." },
//   { year: "2019", title: "Digital Tracking", desc: "Launched real-time shipment tracking platform delivering live cargo visibility to every client." },
//   { year: "2023", title: "AI Logistics", desc: "Integrated AI-powered route optimization and predictive ETAs into daily operations." },
//   { year: "2026", title: "Today & Beyond", desc: "Serving 150+ countries with 25,000+ annual shipments and an industry-leading 99.2% on-time rate." },
// ];

// // ─── Custom Hook: Counter ─────────────────────────────────────────────────────
// function useCounter(end: number, duration = 2200, shouldStart = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!shouldStart) return;
//     let startTime = 0;
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = 1 - Math.pow(1 - progress, 3);
//       setCount(Math.floor(eased * end));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [shouldStart, end, duration]);
//   return count;
// }

// // ─── Reusable: FadeIn ─────────────────────────────────────────────────────────
// function FadeIn({
//   children,
//   delay = 0,
//   className = "",
//   direction = "up",
// }: {
//   children: ReactNode;
//   delay?: number;
//   className?: string;
//   direction?: "up" | "left" | "right" | "none";
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   const initial =
//     direction === "up"
//       ? { opacity: 0, y: 48 }
//       : direction === "left"
//       ? { opacity: 0, x: -48 }
//       : direction === "right"
//       ? { opacity: 0, x: 48 }
//       : { opacity: 0 };
//   const animate = inView
//     ? { opacity: 1, y: 0, x: 0 }
//     : initial;

//   return (
//     <motion.div
//       ref={ref}
//       initial={initial}
//       animate={animate}
//       transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Reusable: SectionLabel ───────────────────────────────────────────────────
// function SectionLabel({ children }: { children: ReactNode }) {
//   return (
//     <span
//       className="inline-block font-bold uppercase tracking-widest text-xs mb-3"
//       style={{ color: ORANGE }}
//     >
//       {children}
//     </span>
//   );
// }

// // ─── Reusable: SectionHeading ─────────────────────────────────────────────────
// function SectionHeading({
//   children,
//   light = false,
// }: {
//   children: ReactNode;
//   light?: boolean;
// }) {
//   return (
//     <h2
//       className="font-display font-black leading-none"
//       style={{
//         color: light ? "#ffffff" : NAVY,
//         fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
//       }}
//     >
//       {children}
//     </h2>
//   );
// }

// // ─── Stat Counter Component ───────────────────────────────────────────────────
// function StatCounter({
//   value,
//   suffix,
//   label,
// }: {
//   value: number;
//   suffix: string;
//   label: string;
// }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-40px" });
//   const count = useCounter(value, 2200, inView);
//   return (
//     <div ref={ref} className="text-center">
//       <div
//         className="font-display font-black leading-none mb-2"
//         style={{ color: BLUE, fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
//       >
//         {count.toLocaleString()}
//         {suffix}
//       </div>
//       <div className="text-white/60 text-xs font-semibold uppercase tracking-widest">
//         {label}
//       </div>
//     </div>
//   );
// }

// // ─── Service Card (small, used in overviews) ──────────────────────────────────
// function ServiceCard({
//   service,
// }: {
//   service: (typeof SERVICES_DATA)[0];
// }) {
//   const Icon = service.icon;
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.div
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       whileHover={{ y: -8 }}
//       transition={{ duration: 0.25 }}
//       className="relative bg-white border border-gray-100 rounded-2xl p-7 cursor-pointer overflow-hidden h-full"
//       style={{
//         boxShadow: hovered
//           ? `0 20px 60px ${service.accentColor}18`
//           : "0 2px 16px rgba(0,0,0,0.05)",
//       }}
//     >
//       <motion.div
//         animate={{ opacity: hovered ? 1 : 0 }}
//         className="absolute inset-0 rounded-2xl pointer-events-none"
//         style={{
//           background: `linear-gradient(135deg, ${service.accentColor}08, transparent 60%)`,
//         }}
//       />
//       <motion.div
//         animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 6 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="w-13 h-13 rounded-xl flex items-center justify-center mb-5"
//         style={{ backgroundColor: `${service.accentColor}18`, width: 52, height: 52 }}
//       >
//         <Icon className="w-6 h-6" style={{ color: service.accentColor }} />
//       </motion.div>
//       <h3
//         className="font-display font-black text-xl mb-2"
//         style={{ color: NAVY }}
//       >
//         {service.title}
//       </h3>
//       <p className="text-gray-500 text-sm leading-relaxed mb-5">
//         {service.cardDesc}
//       </p>
//       <div
//         className="flex items-center gap-1 text-sm font-bold"
//         style={{ color: service.accentColor }}
//       >
//         Learn more
//         <motion.div animate={{ x: hovered ? 5 : 0 }}>
//           <ChevronRight className="w-4 h-4" />
//         </motion.div>
//       </div>
//       <motion.div
//         animate={{ scaleX: hovered ? 1 : 0 }}
//         initial={{ scaleX: 0 }}
//         className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl origin-left"
//         style={{ backgroundColor: service.accentColor }}
//       />
//     </motion.div>
//   );
// }

// // ─── Why Card ──────────────────────────────────────────────────────────────────
// function WhyCard({ item }: { item: (typeof WHY_ITEMS)[0] }) {
//   const Icon = item.icon;
//   const [hovered, setHovered] = useState(false);
//   return (
//     <motion.div
//       onHoverStart={() => setHovered(true)}
//       onHoverEnd={() => setHovered(false)}
//       whileHover={{ scale: 1.03 }}
//       className="relative bg-white rounded-2xl p-7 border border-blue-50 overflow-hidden cursor-default transition-shadow"
//       style={{
//         boxShadow: hovered
//           ? `0 12px 48px ${BLUE}18`
//           : "0 2px 12px rgba(0,0,0,0.04)",
//       }}
//     >
//       <motion.div
//         animate={{ opacity: hovered ? 1 : 0 }}
//         className="absolute inset-0 rounded-2xl pointer-events-none"
//         style={{
//           background: `linear-gradient(135deg, ${BLUE}06, transparent)`,
//         }}
//       />
//       <motion.div
//         animate={{ scale: hovered ? 1.15 : 1 }}
//         transition={{ duration: 0.3 }}
//         className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
//         style={{ backgroundColor: NAVY }}
//       >
//         <Icon className="w-6 h-6" style={{ color: BLUE }} />
//       </motion.div>
//       <h3
//         className="font-display font-black text-lg mb-2"
//         style={{ color: NAVY }}
//       >
//         {item.title}
//       </h3>
//       <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
//     </motion.div>
//   );
// }

// // ─── Navbar ───────────────────────────────────────────────────────────────────
// function Navbar({
//   activePage,
//   setActivePage,
// }: {
//   activePage: string;
//   setActivePage: (p: string) => void;
// }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { label: "Home", id: "home" },
//     { label: "About", id: "about" },
//     { label: "Services", id: "services" },
//     { label: "Contact", id: "contact" },
//   ];

//   const goTo = (id: string) => {
//     setMobileOpen(false);
//     if (id === "contact") {
//       setActivePage("home");
//       setTimeout(
//         () =>
//           document
//             .getElementById("contact")
//             ?.scrollIntoView({ behavior: "smooth" }),
//         80
//       );
//     } else {
//       setActivePage(id);
//       window.scrollTo({ top: 0 });
//     }
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
//         style={{
//           background: scrolled
//             ? `${NAVY}f5`
//             : "transparent",
//           backdropFilter: scrolled ? "blur(12px)" : "none",
//           boxShadow: scrolled ? "0 4px 32px rgba(10,61,98,0.25)" : "none",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <button
//               onClick={() => goTo("home")}
//               className="flex items-center gap-3 group"
//             >
//               <div
//                 className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
//                 style={{ backgroundColor: BLUE }}
//               >
//                 <Ship className="w-5 h-5 text-white" />
//               </div>
//               <span className="font-display font-black text-2xl text-white tracking-tight">
//                 VAL<span style={{ color: ORANGE }}>CARGO</span>
//               </span>
//             </button>

//             {/* Desktop Nav */}
//             <div className="hidden md:flex items-center gap-7">
//               {navItems.map((item, i) => (
//                 <motion.button
//                   key={item.id}
//                   initial={{ opacity: 0, y: -16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 + i * 0.08 }}
//                   onClick={() => goTo(item.id)}
//                   className="relative text-xs font-bold uppercase tracking-widest transition-colors"
//                   style={{
//                     color:
//                       activePage === item.id
//                         ? ORANGE
//                         : "rgba(255,255,255,0.75)",
//                   }}
//                 >
//                   {item.label}
//                   {activePage === item.id && item.id !== "contact" && (
//                     <motion.div
//                       layoutId="nav-active"
//                       className="absolute -bottom-1 left-0 right-0 h-px"
//                       style={{ backgroundColor: ORANGE }}
//                     />
//                   )}
//                 </motion.button>
//               ))}
//               <button
//                 onClick={() => goTo("contact")}
//                 className="text-white font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105"
//                 style={{ backgroundColor: ORANGE }}
//               >
//                 Get Quote
//               </button>
//             </div>

//             {/* Mobile toggle */}
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="md:hidden text-white p-2"
//             >
//               {mobileOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile menu */}
//       {mobileOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="fixed top-20 left-0 right-0 z-40 border-t border-white/10"
//           style={{ background: `${NAVY}f8`, backdropFilter: "blur(12px)" }}
//         >
//           <div className="max-w-7xl mx-auto px-6 py-5 space-y-1">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => goTo(item.id)}
//                 className="block w-full text-left py-3 text-sm font-bold uppercase tracking-widest border-b border-white/10 last:border-0 transition-colors"
//                 style={{
//                   color: activePage === item.id ? ORANGE : "rgba(255,255,255,0.7)",
//                 }}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </>
//   );
// }

// // ─── Hero Section ─────────────────────────────────────────────────────────────
// function HeroSection({ onNavigate }: { onNavigate: (p: string) => void }) {
//   const floaters = [
//     { x: "8%", y: "35%", color: BLUE, delay: 0, w: 64, h: 40 },
//     { x: "82%", y: "22%", color: ORANGE, delay: 0.6, w: 48, h: 30 },
//     { x: "72%", y: "60%", color: BLUE, delay: 1.2, w: 36, h: 24 },
//     { x: "18%", y: "72%", color: ORANGE, delay: 1.8, w: 56, h: 35 },
//     { x: "90%", y: "48%", color: BLUE, delay: 2.4, w: 42, h: 26 },
//   ];

//   return (
//     <div
//       className="relative min-h-screen flex items-center overflow-hidden"
//       style={{ backgroundColor: NAVY }}
//     >
//       {/* Animated background */}
//       <div className="absolute inset-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center animate-ken-burns"
//           style={{ backgroundImage: `url(${IMG.heroShip})` }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(105deg, ${NAVY}f5 0%, ${NAVY}c0 50%, ${NAVY}70 100%)`,
//           }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(to top, ${NAVY}cc 0%, transparent 60%)`,
//           }}
//         />
//       </div>

//       {/* Dot-grid overlay */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `radial-gradient(${BLUE} 1px, transparent 1px)`,
//           backgroundSize: "36px 36px",
//         }}
//       />

//       {/* Floating container boxes */}
//       {floaters.map((f, i) => (
//         <motion.div
//           key={i}
//           className="absolute hidden lg:block rounded-sm"
//           style={{
//             left: f.x,
//             top: f.y,
//             width: f.w,
//             height: f.h,
//             backgroundColor: f.color,
//             opacity: 0.12,
//             borderRadius: 4,
//           }}
//           animate={{ y: [0, -14, 0], rotate: [0, 2, 0], opacity: [0.12, 0.18, 0.12] }}
//           transition={{
//             duration: 5 + i * 0.7,
//             delay: f.delay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
//         <div className="max-w-3xl">
//           {/* Badge */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="inline-flex items-center gap-2.5 border rounded-full px-4 py-2 mb-8"
//             style={{
//               background: `${ORANGE}1a`,
//               borderColor: `${ORANGE}50`,
//               color: ORANGE,
//             }}
//           >
//             <span
//               className="w-2 h-2 rounded-full animate-pulse"
//               style={{ backgroundColor: ORANGE }}
//             />
//             <span className="text-xs font-bold uppercase tracking-widest">
//               Global Freight Solutions
//             </span>
//           </motion.div>

//           {/* Headline */}
//           <motion.h1
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
//             className="font-display font-black text-white leading-none mb-6"
//             style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)" }}
//           >
//             MOVING CARGO,
//             <br />
//             <span style={{ color: BLUE }}>BUILDING</span>
//             <br />
//             TRUST.
//           </motion.h1>

//           {/* Subhead */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.65 }}
//             className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl"
//           >
//             Valcargo delivers end-to-end freight forwarding, FCL, LCL, air
//             freight, and door-to-door logistics solutions across 150+ countries
//             — with a 99.2% on-time delivery rate.
//           </motion.p>

//           {/* CTA buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.85 }}
//             className="flex flex-wrap gap-4"
//           >
//             <button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
//               style={{
//                 backgroundColor: ORANGE,
//                 boxShadow: `0 8px 32px ${ORANGE}40`,
//               }}
//             >
//               Get a Free Quote
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button
//               onClick={() => onNavigate("services")}
//               className="font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 text-white border-2 hover:bg-white/10"
//               style={{ borderColor: "rgba(255,255,255,0.3)" }}
//             >
//               Our Services
//             </button>
//           </motion.div>

//           {/* Quick stats */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1.15 }}
//             className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/15"
//           >
//             {[
//               { v: "150+", l: "Countries" },
//               { v: "25K+", l: "Shipments/Year" },
//               { v: "99.2%", l: "On-Time Rate" },
//               { v: "18+", l: "Yrs Experience" },
//             ].map((s) => (
//               <div key={s.l}>
//                 <div
//                   className="font-display font-black leading-none"
//                   style={{ color: ORANGE, fontSize: "2rem" }}
//                 >
//                   {s.v}
//                 </div>
//                 <div className="text-white/50 text-xs uppercase tracking-widest mt-1">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.6 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
//       >
//         <span className="text-xs uppercase tracking-widest font-semibold">
//           Scroll
//         </span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <ChevronDown className="w-5 h-5" />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// // ─── Stats Section ────────────────────────────────────────────────────────────
// function StatsSection() {
//   return (
//     <section style={{ backgroundColor: NAVY }} className="py-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
//           {[
//             { value: 150, suffix: "+", label: "Countries Served" },
//             { value: 25000, suffix: "+", label: "Shipments Per Year" },
//             { value: 18, suffix: "+", label: "Years Experience" },
//             { value: 99, suffix: "%", label: "On-Time Delivery" },
//           ].map((s) => (
//             <StatCounter key={s.label} {...s} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Services Overview ─────────────────────────────────────────────────────────
// function ServicesOverview({ onNavigate }: { onNavigate: (p: string) => void }) {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <FadeIn>
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
//             <div>
//               <SectionLabel>Our Services</SectionLabel>
//               <SectionHeading>
//                 COMPLETE LOGISTICS
//                 <br />
//                 SOLUTIONS
//               </SectionHeading>
//             </div>
//             <p className="text-gray-400 max-w-sm leading-relaxed text-sm md:text-right">
//               From air to sea, single pallets to full containers — we provide
//               the complete spectrum of freight forwarding services.
//             </p>
//           </div>
//         </FadeIn>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {SERVICES_DATA.map((service, i) => (
//             <FadeIn key={service.id} delay={i * 0.08}>
//               <ServiceCard service={service} />
//             </FadeIn>
//           ))}
//         </div>

//         <FadeIn className="text-center mt-12">
//           <button
//             onClick={() => onNavigate("services")}
//             className="group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
//             style={{ backgroundColor: NAVY }}
//           >
//             View All Services
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─── Why Choose Valcargo ──────────────────────────────────────────────────────
// function WhyChoose() {
//   return (
//     <section
//       className="py-24"
//       style={{ background: "linear-gradient(135deg, #f4f8ff 0%, #eaf2ff 100%)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <FadeIn className="text-center mb-14">
//           <SectionLabel>Why Valcargo</SectionLabel>
//           <SectionHeading>THE VALCARGO ADVANTAGE</SectionHeading>
//         </FadeIn>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {WHY_ITEMS.map((item, i) => (
//             <FadeIn key={item.title} delay={i * 0.08}>
//               <WhyCard item={item} />
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── Commitment Timeline ──────────────────────────────────────────────────────
// function CommitmentTimeline() {
//   return (
//     <section className="py-24 overflow-hidden" style={{ backgroundColor: NAVY }}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <FadeIn className="text-center mb-16">
//           <SectionLabel>Our Journey</SectionLabel>
//           <SectionHeading light>
//             TWO DECADES OF
//             <br />
//             COMMITMENT
//           </SectionHeading>
//         </FadeIn>

//         <div className="relative">
//           {/* Vertical center line (desktop) */}
//           <div
//             className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
//             style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
//           />

//           <div className="space-y-10">
//             {TIMELINE.map((item, i) => (
//               <FadeIn
//                 key={item.year}
//                 delay={i * 0.12}
//                 direction={i % 2 === 0 ? "left" : "right"}
//               >
//                 <div
//                   className={`flex flex-col md:flex-row items-stretch gap-6 ${
//                     i % 2 !== 0 ? "md:flex-row-reverse" : ""
//                   }`}
//                 >
//                   {/* Card */}
//                   <div
//                     className={`flex-1 ${
//                       i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
//                     }`}
//                   >
//                     <div
//                       className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
//                       style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
//                     >
//                       <div
//                         className="font-display font-black mb-1"
//                         style={{ color: ORANGE, fontSize: "2.4rem" }}
//                       >
//                         {item.year}
//                       </div>
//                       <div className="text-white font-bold text-lg mb-2">
//                         {item.title}
//                       </div>
//                       <div className="text-white/55 text-sm leading-relaxed">
//                         {item.desc}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Center dot */}
//                   <div className="hidden md:flex items-center justify-center flex-shrink-0 w-5">
//                     <div
//                       className="w-4 h-4 rounded-full border-4"
//                       style={{
//                         backgroundColor: ORANGE,
//                         borderColor: NAVY,
//                         boxShadow: `0 0 0 4px ${ORANGE}40`,
//                       }}
//                     />
//                   </div>

//                   {/* Spacer */}
//                   <div className="flex-1 hidden md:block" />
//                 </div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── CTA Section ──────────────────────────────────────────────────────────────
// function CTASection({ onNavigate }: { onNavigate: (p: string) => void }) {
//   return (
//     <section className="relative py-28 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${IMG.containerPort})` }}
//       />
//       <div
//         className="absolute inset-0"
//         style={{ background: `${NAVY}e8` }}
//       />
//       <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
//         <FadeIn>
//           <SectionLabel>Ready to Ship?</SectionLabel>
//           <SectionHeading light>
//             GET YOUR SHIPMENT
//             <br />
//             MOVING TODAY
//           </SectionHeading>
//           <p className="text-white/60 text-lg mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
//             Whether you need ocean freight, air cargo, or door-to-door
//             logistics — Valcargo has the expertise and network to deliver.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <button
//               onClick={() =>
//                 document
//                   .getElementById("contact")
//                   ?.scrollIntoView({ behavior: "smooth" })
//               }
//               className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
//               style={{
//                 backgroundColor: ORANGE,
//                 boxShadow: `0 8px 32px ${ORANGE}40`,
//               }}
//             >
//               Request a Quote
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button
//               onClick={() => onNavigate("services")}
//               className="font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all text-white border-2 hover:bg-white/10"
//               style={{ borderColor: "rgba(255,255,255,0.35)" }}
//             >
//               Explore Services
//             </button>
//           </div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─── Contact Section ──────────────────────────────────────────────────────────
// function ContactSection() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 1200);
//   };

//   const inputClass =
//     "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none transition-all text-gray-700 bg-white";

//   return (
//     <section id="contact" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <FadeIn className="text-center mb-14">
//           <SectionLabel>Get In Touch</SectionLabel>
//           <SectionHeading>REQUEST A QUOTE</SectionHeading>
//         </FadeIn>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
//           {/* Left info */}
//           <FadeIn direction="left">
//             <div className="space-y-8">
//               <div>
//                 <h3
//                   className="font-display font-black text-2xl mb-3"
//                   style={{ color: NAVY }}
//                 >
//                   {"LET'S TALK LOGISTICS"}
//                 </h3>
//                 <p className="text-gray-500 leading-relaxed text-sm">
//                   Our freight experts are ready to design a shipping solution
//                   tailored to your business needs. Get a competitive quote
//                   within 24 hours.
//                 </p>
//               </div>

//               {[
//                 { icon: Phone, label: "Phone", value: "+971 4 123 4567" },
//                 { icon: Mail, label: "Email", value: "info@valcargo.com" },
//                 {
//                   icon: MapPin,
//                   label: "Head Office",
//                   value: "Business Bay, Dubai, UAE",
//                 },
//                 { icon: Clock, label: "Hours", value: "Mon–Fri 8:00–18:00 GST" },
//               ].map((c) => (
//                 <div key={c.label} className="flex items-start gap-4">
//                   <div
//                     className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
//                     style={{ backgroundColor: NAVY }}
//                   >
//                     <c.icon className="w-5 h-5" style={{ color: BLUE }} />
//                   </div>
//                   <div>
//                     <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
//                       {c.label}
//                     </div>
//                     <div className="font-semibold text-sm" style={{ color: NAVY }}>
//                       {c.value}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Image */}
//               <div
//                 className="rounded-2xl overflow-hidden h-52 mt-4"
//                 style={{
//                   backgroundImage: `url(${IMG.cargoShipAerial})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundColor: NAVY,
//                 }}
//               />
//             </div>
//           </FadeIn>

//           {/* Form */}
//           <FadeIn direction="right" delay={0.15}>
//             {submitted ? (
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-white rounded-2xl p-14 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center h-full"
//               >
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
//                   <Check className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h3
//                   className="font-display font-black text-2xl mb-2"
//                   style={{ color: NAVY }}
//                 >
//                   Quote Requested!
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                   {"We'll send your freight quote within 24 business hours."}
//                 </p>
//               </motion.div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       required
//                       value={form.name}
//                       onChange={(e) =>
//                         setForm({ ...form, name: e.target.value })
//                       }
//                       className={inputClass}
//                       style={{ borderColor: "rgba(10,61,98,0.15)" }}
//                       placeholder="John Smith"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       required
//                       value={form.email}
//                       onChange={(e) =>
//                         setForm({ ...form, email: e.target.value })
//                       }
//                       className={inputClass}
//                       style={{ borderColor: "rgba(10,61,98,0.15)" }}
//                       placeholder="john@company.com"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       value={form.phone}
//                       onChange={(e) =>
//                         setForm({ ...form, phone: e.target.value })
//                       }
//                       className={inputClass}
//                       style={{ borderColor: "rgba(10,61,98,0.15)" }}
//                       placeholder="+971 50 000 0000"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
//                       Service
//                     </label>
//                     <select
//                       value={form.service}
//                       onChange={(e) =>
//                         setForm({ ...form, service: e.target.value })
//                       }
//                       className={inputClass}
//                       style={{ borderColor: "rgba(10,61,98,0.15)" }}
//                     >
//                       <option value="">Select service…</option>
//                       <option>Freight Forwarding</option>
//                       <option>FCL Services</option>
//                       <option>LCL Services</option>
//                       <option>Air Freight</option>
//                       <option>Door-to-Door</option>
//                       <option>Customs Clearance</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
//                     Message
//                   </label>
//                   <textarea
//                     rows={4}
//                     value={form.message}
//                     onChange={(e) =>
//                       setForm({ ...form, message: e.target.value })
//                     }
//                     className={`${inputClass} resize-none`}
//                     style={{ borderColor: "rgba(10,61,98,0.15)" }}
//                     placeholder="Describe your shipment needs, origin, destination, volume…"
//                   />
//                 </div>
//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ scale: loading ? 1 : 1.02 }}
//                   whileTap={{ scale: loading ? 1 : 0.98 }}
//                   className="w-full text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
//                   style={{ backgroundColor: loading ? BLUE : NAVY }}
//                 >
//                   {loading ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                       Sending…
//                     </>
//                   ) : (
//                     <>
//                       Send Quote Request
//                       <ArrowRight className="w-5 h-5" />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─── About Page ───────────────────────────────────────────────────────────────
// function AboutPage({ onNavigate }: { onNavigate: (p: string) => void }) {
//   const coreValues = [
//     {
//       icon: Shield,
//       title: "Integrity",
//       desc: "Complete transparency in pricing, timelines, and service delivery — no surprises, ever.",
//     },
//     {
//       icon: Star,
//       title: "Excellence",
//       desc: "Every shipment, regardless of size or route, receives the same precision and care.",
//     },
//     {
//       icon: Users,
//       title: "Partnership",
//       desc: "Long-term relationships built on understanding each client's unique supply chain needs.",
//     },
//     {
//       icon: Zap,
//       title: "Innovation",
//       desc: "Continuous investment in technology that gives our clients a measurable competitive edge.",
//     },
//   ];

//   const team = [
//     {
//       name: "Ahmed Al-Rashid",
//       role: "Chief Executive Officer",
//       imgId: "photo-1507003211169-0a1dd7228f2d",
//     },
//     {
//       name: "Sarah Mitchell",
//       role: "Head of Operations",
//       imgId: "photo-1494790108377-be9c29b29330",
//     },
//     {
//       name: "Marcus Chen",
//       role: "Director of Air Freight",
//       imgId: "photo-1500648767791-00dcc994a43e",
//     },
//     {
//       name: "Priya Sharma",
//       role: "Head of Customs & Compliance",
//       imgId: "photo-1438761681033-6461ffad8d80",
//     },
//   ];

//   return (
//     <div className="pt-20">
//       {/* Hero */}
//       <div
//         className="relative py-36 overflow-hidden"
//         style={{ backgroundColor: NAVY }}
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-25"
//           style={{ backgroundImage: `url(${IMG.teamMeeting})` }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(105deg, ${NAVY}f0 0%, ${NAVY}80 100%)`,
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//           <FadeIn>
//             <SectionLabel>About Valcargo</SectionLabel>
//             <h1
//               className="font-display font-black text-white leading-none mt-3"
//               style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
//             >
//               TWO DECADES OF
//               <br />
//               <span style={{ color: BLUE }}>MOVING TRUST.</span>
//             </h1>
//           </FadeIn>
//         </div>
//       </div>

//       {/* Company Overview */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <FadeIn direction="left">
//               <div
//                 className="rounded-2xl overflow-hidden h-96"
//                 style={{
//                   backgroundImage: `url(${IMG.warehouse})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundColor: NAVY,
//                 }}
//               />
//             </FadeIn>
//             <FadeIn direction="right" delay={0.15}>
//               <SectionLabel>Who We Are</SectionLabel>
//               <SectionHeading>
//                 TRUSTED FREIGHT
//                 <br />
//                 PARTNERS SINCE 2006
//               </SectionHeading>
//               <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-4">
//                 Valcargo was founded in Dubai in 2006 with a singular mission:
//                 make international freight forwarding reliable, transparent, and
//                 accessible to businesses of all sizes. From our first sea
//                 freight consignment to handling over 25,000 shipments annually,
//                 we have built our reputation shipment by shipment.
//               </p>
//               <p className="text-gray-500 text-sm leading-relaxed mb-8">
//                 Today, we operate a global network spanning 150+ countries, with
//                 specialized teams for ocean freight (FCL & LCL), air cargo,
//                 customs clearance, and last-mile delivery. Our clients range
//                 from SMEs managing their first import to Fortune 500 companies
//                 with complex global supply chains.
//               </p>
//               <div className="grid grid-cols-2 gap-5">
//                 {[
//                   { v: "18+", l: "Years in Business" },
//                   { v: "150+", l: "Country Network" },
//                   { v: "25K+", l: "Annual Shipments" },
//                   { v: "500+", l: "Global Partners" },
//                 ].map((s) => (
//                   <div
//                     key={s.l}
//                     className="pl-4 border-l-4"
//                     style={{ borderColor: ORANGE }}
//                   >
//                     <div
//                       className="font-display font-black text-3xl"
//                       style={{ color: NAVY }}
//                     >
//                       {s.v}
//                     </div>
//                     <div className="text-gray-400 text-xs uppercase tracking-widest">
//                       {s.l}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section
//         className="py-24"
//         style={{ background: "linear-gradient(135deg, #f4f8ff, #eaf2ff)" }}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <FadeIn className="text-center mb-14">
//             <SectionLabel>Our Purpose</SectionLabel>
//             <SectionHeading>MISSION & VISION</SectionHeading>
//           </FadeIn>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
//             {[
//               {
//                 label: "Our Mission",
//                 icon: Target,
//                 body: "To deliver world-class freight forwarding services that empower businesses to trade globally with confidence. We achieve this through deep logistics expertise, advanced technology, and a relentless commitment to on-time delivery.",
//               },
//               {
//                 label: "Our Vision",
//                 icon: Globe,
//                 body: "To be the world's most trusted independent freight forwarder — recognized for our integrity, innovation, and the measurable value we create for every client's supply chain.",
//               },
//             ].map((item) => (
//               <FadeIn key={item.label}>
//                 <motion.div
//                   whileHover={{ y: -4 }}
//                   className="bg-white rounded-2xl p-10 border border-blue-50 h-full"
//                 >
//                   <div
//                     className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
//                     style={{ backgroundColor: NAVY }}
//                   >
//                     <item.icon
//                       className="w-7 h-7"
//                       style={{ color: ORANGE }}
//                     />
//                   </div>
//                   <h3
//                     className="font-display font-black text-2xl mb-4"
//                     style={{ color: NAVY }}
//                   >
//                     {item.label}
//                   </h3>
//                   <p className="text-gray-500 leading-relaxed text-sm">
//                     {item.body}
//                   </p>
//                 </motion.div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <FadeIn className="text-center mb-14">
//             <SectionLabel>What We Stand For</SectionLabel>
//             <SectionHeading>CORE VALUES</SectionHeading>
//           </FadeIn>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//             {coreValues.map((v, i) => (
//               <FadeIn key={v.title} delay={i * 0.08}>
//                 <motion.div
//                   whileHover={{ y: -6 }}
//                   className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100"
//                 >
//                   <div
//                     className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
//                     style={{ backgroundColor: NAVY }}
//                   >
//                     <v.icon
//                       className="w-8 h-8"
//                       style={{ color: ORANGE }}
//                     />
//                   </div>
//                   <h3
//                     className="font-display font-black text-xl mb-3"
//                     style={{ color: NAVY }}
//                   >
//                     {v.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm leading-relaxed">
//                     {v.desc}
//                   </p>
//                 </motion.div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quality Promise */}
//       <section className="py-24" style={{ backgroundColor: NAVY }}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <FadeIn direction="left">
//               <SectionLabel>Our Promise</SectionLabel>
//               <SectionHeading light>
//                 THE VALCARGO
//                 <br />
//                 QUALITY PROMISE
//               </SectionHeading>
//               <p className="text-white/60 text-sm leading-relaxed mt-5 mb-8">
//                 Every shipment we handle carries the weight of our promise:
//                 competitive pricing, transparent communication, and delivery you
//                 can count on. We do not just move cargo — we move your business
//                 forward.
//               </p>
//               <ul className="space-y-4">
//                 {[
//                   "99.2% on-time delivery rate across all trade lanes",
//                   "ISO 9001:2015 certified quality management",
//                   "Dedicated account manager for every client",
//                   "Same-day quote response during business hours",
//                   "Full cargo insurance on every shipment",
//                   "24/7 live shipment tracking and support",
//                 ].map((p) => (
//                   <li key={p} className="flex items-start gap-3">
//                     <div
//                       className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
//                       style={{ backgroundColor: ORANGE }}
//                     >
//                       <Check className="w-3 h-3 text-white" />
//                     </div>
//                     <span className="text-white/70 text-sm">{p}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={() => onNavigate("services")}
//                 className="mt-10 group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-lg transition-all hover:scale-105"
//                 style={{ backgroundColor: ORANGE }}
//               >
//                 View Our Services
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </FadeIn>
//             <FadeIn direction="right" delay={0.15}>
//               <div
//                 className="rounded-2xl overflow-hidden h-96"
//                 style={{
//                   backgroundImage: `url(${IMG.warehouseForklift})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   backgroundColor: NAVY,
//                 }}
//               />
//             </FadeIn>
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <FadeIn className="text-center mb-14">
//             <SectionLabel>Our People</SectionLabel>
//             <SectionHeading>LEADERSHIP TEAM</SectionHeading>
//           </FadeIn>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, i) => (
//               <FadeIn key={member.name} delay={i * 0.1}>
//                 <motion.div whileHover={{ y: -6 }} className="text-center group">
//                   <div className="relative w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-100">
//                     <img
//                       src={`https://images.unsplash.com/${member.imgId}?w=300&h=300&fit=crop&auto=format`}
//                       alt={member.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <h3
//                     className="font-display font-black text-base"
//                     style={{ color: NAVY }}
//                   >
//                     {member.name}
//                   </h3>
//                   <p className="text-xs font-semibold mt-1" style={{ color: BLUE }}>
//                     {member.role}
//                   </p>
//                 </motion.div>
//               </FadeIn>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // ─── Services Page ────────────────────────────────────────────────────────────
// function ServicesPage() {
//   const [activeId, setActiveId] = useState(SERVICES_DATA[0].id);
//   const current = SERVICES_DATA.find((s) => s.id === activeId)!;

//   return (
//     <div className="pt-20">
//       {/* Hero */}
//       <div
//         className="relative py-36 overflow-hidden"
//         style={{ backgroundColor: NAVY }}
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: `url(${IMG.containerPort})` }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: `linear-gradient(105deg, ${NAVY}f0 0%, ${NAVY}70 100%)`,
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//           <FadeIn>
//             <SectionLabel>What We Do</SectionLabel>
//             <h1
//               className="font-display font-black text-white leading-none mt-3"
//               style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
//             >
//               OUR SERVICES
//             </h1>
//           </FadeIn>
//         </div>
//       </div>

//       {/* Service tab bar */}
//       <div
//         className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm"
//       >
//         <div className="max-w-7xl mx-auto px-4 lg:px-8">
//           <div className="flex overflow-x-auto scrollbar-hide">
//             {SERVICES_DATA.map((s) => {
//               const Icon = s.icon;
//               const active = activeId === s.id;
//               return (
//                 <button
//                   key={s.id}
//                   onClick={() => setActiveId(s.id)}
//                   className="flex items-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap transition-all flex-shrink-0"
//                   style={{
//                     borderColor: active ? ORANGE : "transparent",
//                     color: active ? NAVY : "#9ca3af",
//                   }}
//                 >
//                   <Icon className="w-4 h-4" style={{ color: active ? ORANGE : undefined }} />
//                   {s.title}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Active service detail */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <motion.div
//             key={current.id}
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45 }}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
//           >
//             <div>
//               <div
//                 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
//                 style={{ color: current.accentColor }}
//               >
//                 <current.icon className="w-4 h-4" />
//                 {current.subtitle}
//               </div>
//               <SectionHeading>
//                 {current.title.toUpperCase()}
//               </SectionHeading>
//               <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-8">
//                 {current.description}
//               </p>
//               <ul className="space-y-3 mb-8">
//                 {current.features.map((f) => (
//                   <li key={f} className="flex items-center gap-3">
//                     <div
//                       className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
//                       style={{ backgroundColor: `${current.accentColor}1a` }}
//                     >
//                       <Check
//                         className="w-3 h-3"
//                         style={{ color: current.accentColor }}
//                       />
//                     </div>
//                     <span className="text-gray-600 text-sm">{f}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById("contact")
//                     ?.scrollIntoView({ behavior: "smooth" })
//                 }
//                 className="group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-lg transition-all hover:scale-105"
//                 style={{
//                   backgroundColor: current.accentColor,
//                   boxShadow: `0 8px 24px ${current.accentColor}30`,
//                 }}
//               >
//                 Get a Quote
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div
//               className="rounded-2xl overflow-hidden h-96"
//               style={{
//                 backgroundImage: `url(${current.img})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundColor: NAVY,
//               }}
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* All services grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <FadeIn className="text-center mb-10">
//             <h3
//               className="font-display font-black text-2xl"
//               style={{ color: NAVY }}
//             >
//               ALL SERVICES AT A GLANCE
//             </h3>
//           </FadeIn>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {SERVICES_DATA.map((s, i) => {
//               const active = activeId === s.id;
//               const Icon = s.icon;
//               return (
//                 <FadeIn key={s.id} delay={i * 0.06}>
//                   <motion.button
//                     whileHover={{ y: -4 }}
//                     onClick={() => {
//                       setActiveId(s.id);
//                       window.scrollTo({ top: 0 });
//                     }}
//                     className="w-full text-left p-5 rounded-2xl border transition-all"
//                     style={{
//                       backgroundColor: active ? NAVY : "white",
//                       borderColor: active ? NAVY : "rgba(0,0,0,0.07)",
//                       boxShadow: active
//                         ? `0 8px 32px ${NAVY}30`
//                         : "0 2px 8px rgba(0,0,0,0.04)",
//                     }}
//                   >
//                     <Icon
//                       className="w-6 h-6 mb-3"
//                       style={{ color: active ? ORANGE : s.accentColor }}
//                     />
//                     <div
//                       className="font-bold text-xs leading-tight"
//                       style={{ color: active ? "white" : NAVY }}
//                     >
//                       {s.title}
//                     </div>
//                     <div
//                       className="text-xs mt-1"
//                       style={{
//                         color: active
//                           ? "rgba(255,255,255,0.5)"
//                           : "#9ca3af",
//                       }}
//                     >
//                       {s.subtitle}
//                     </div>
//                   </motion.button>
//                 </FadeIn>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact form inline */}
//       <ContactSection />
//     </div>
//   );
// }

// // ─── Footer ───────────────────────────────────────────────────────────────────
// function Footer({ setActivePage }: { setActivePage: (p: string) => void }) {
//   return (
//     <footer style={{ backgroundColor: "#061f33" }} className="text-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <div
//                 className="w-10 h-10 rounded-lg flex items-center justify-center"
//                 style={{ backgroundColor: BLUE }}
//               >
//                 <Ship className="w-5 h-5 text-white" />
//               </div>
//               <span className="font-display font-black text-xl">
//                 VAL<span style={{ color: ORANGE }}>CARGO</span>
//               </span>
//             </div>
//             <p className="text-white/45 text-sm leading-relaxed mb-6">
//               Delivering trust, reliability, and efficiency in every shipment
//               since 2006.
//             </p>
//             <div className="flex gap-2.5">
//               {[
//                 { Icon: Globe },
//                 { Icon: Plane },
//                 { Icon: Anchor },
//               ].map(({ Icon }, i) => (
//                 <div
//                   key={i}
//                   className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:opacity-80"
//                   style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
//                 >
//                   <Icon className="w-4 h-4 text-white/60" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4
//               className="font-bold uppercase tracking-widest text-xs mb-5"
//               style={{ color: ORANGE }}
//             >
//               Services
//             </h4>
//             <ul className="space-y-3 text-sm text-white/45">
//               {[
//                 "Freight Forwarding",
//                 "FCL Services",
//                 "LCL Services",
//                 "Air Freight",
//                 "Door-to-Door",
//                 "Customs Clearance",
//               ].map((s) => (
//                 <li key={s}>
//                   <button
//                     onClick={() => {
//                       setActivePage("services");
//                       window.scrollTo({ top: 0 });
//                     }}
//                     className="hover:text-white transition-colors"
//                   >
//                     {s}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h4
//               className="font-bold uppercase tracking-widest text-xs mb-5"
//               style={{ color: ORANGE }}
//             >
//               Company
//             </h4>
//             <ul className="space-y-3 text-sm text-white/45">
//               {[
//                 { label: "About Us", page: "about" },
//                 { label: "Leadership Team", page: "about" },
//                 { label: "Our Services", page: "services" },
//                 { label: "Careers", page: "home" },
//                 { label: "Contact", page: "contact" },
//               ].map((item) => (
//                 <li key={item.label}>
//                   <button
//                     onClick={() => {
//                       setActivePage(item.page === "contact" ? "home" : item.page);
//                       window.scrollTo({ top: 0 });
//                       if (item.page === "contact")
//                         setTimeout(
//                           () =>
//                             document
//                               .getElementById("contact")
//                               ?.scrollIntoView({ behavior: "smooth" }),
//                           80
//                         );
//                     }}
//                     className="hover:text-white transition-colors"
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4
//               className="font-bold uppercase tracking-widest text-xs mb-5"
//               style={{ color: ORANGE }}
//             >
//               Contact
//             </h4>
//             <ul className="space-y-4 text-sm text-white/45">
//               {[
//                 { Icon: MapPin, v: "Business Bay, Dubai, UAE" },
//                 { Icon: Phone, v: "+971 4 123 4567" },
//                 { Icon: Mail, v: "info@valcargo.com" },
//                 { Icon: Clock, v: "Mon–Fri 8:00–18:00 GST" },
//               ].map(({ Icon, v }) => (
//                 <li key={v} className="flex items-start gap-3">
//                   <Icon
//                     className="w-4 h-4 flex-shrink-0 mt-0.5"
//                     style={{ color: BLUE }}
//                   />
//                   <span>{v}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/8">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-white/25 text-xs">
//             &copy; 2026 Valcargo International Freight LLC. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
//               (item) => (
//                 <button
//                   key={item}
//                   className="text-white/25 text-xs hover:text-white/60 transition-colors"
//                 >
//                   {item}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── Home Page ────────────────────────────────────────────────────────────────
// function HomePage({ onNavigate }: { onNavigate: (p: string) => void }) {
//   return (
//     <>
//       <HeroSection onNavigate={onNavigate} />
//       <StatsSection />
//       <ServicesOverview onNavigate={onNavigate} />
//       <WhyChoose />
//       <CommitmentTimeline />
//       <CTASection onNavigate={onNavigate} />
//       <ContactSection />
//     </>
//   );
// }

// // ─── App ──────────────────────────────────────────────────────────────────────
// export default function App() {
//   const [activePage, setActivePage] = useState("home");

//   const navigate = (page: string) => {
//     if (page === "contact") {
//       setActivePage("home");
//       setTimeout(
//         () =>
//           document
//             .getElementById("contact")
//             ?.scrollIntoView({ behavior: "smooth" }),
//         80
//       );
//     } else {
//       setActivePage(page);
//       window.scrollTo({ top: 0 });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar activePage={activePage} setActivePage={navigate} />
//       {activePage === "home" && <HomePage onNavigate={navigate} />}
//       {activePage === "about" && <AboutPage onNavigate={navigate} />}
//       {activePage === "services" && <ServicesPage />}
//       <Footer setActivePage={navigate} />
//     </div>
//   );
// }

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import {
  Ship,
  Plane,
  Package,
  Truck,
  Globe,
  Shield,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  TrendingUp,
  Award,
  Users,
  ArrowRight,
  Anchor,
  Zap,
  Target,
  Star,
  Check,
  Layers,
} from "lucide-react";

// ─── Image URLs ──────────────────────────────────────────────────────────────
const IMG = {
  heroShip: "https://images.unsplash.com/photo-1699588999949-e25959a59550?w=1920&h=1080&fit=crop&auto=format",
  containerPort: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&h=800&fit=crop&auto=format",
  cargoShipAerial: "https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?w=800&h=600&fit=crop&auto=format",
  warehouse: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?w=800&h=600&fit=crop&auto=format",
  warehouseForklift: "https://images.unsplash.com/photo-1645736315000-6f788915923b?w=800&h=600&fit=crop&auto=format",
  airFreight: "https://images.unsplash.com/photo-1542296332-2e4473faf563?w=800&h=600&fit=crop&auto=format",
  teamMeeting: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop&auto=format",
  shipBluered: "https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?w=800&h=600&fit=crop&auto=format",
};

// ─── Constants ────────────────────────────────────────────────────────────────
const NAVY = "#0A3D62";
const BLUE = "#00A8FF";
const ORANGE = "#F39C12";

const SERVICES_DATA = [
  {
    id: "freight-forwarding",
    icon: Ship,
    title: "Freight Forwarding",
    subtitle: "Import & Export",
    accentColor: BLUE,
    description:
      "Our freight forwarding service manages every aspect of international cargo movement — from origin booking and documentation to customs clearance and final delivery.",
    features: [
      "Full import & export management",
      "Multi-modal transport coordination",
      "Customs documentation & clearance",
      "Dangerous goods handling (IMDG/IATA)",
      "Incoterms advisory",
      "Trade compliance consulting",
    ],
    img: IMG.shipBluered,
    cardDesc:
      "Import and export cargo management with customs clearance, documentation, and door-to-port coordination.",
  },
  {
    id: "fcl",
    icon: Package,
    title: "FCL Services",
    subtitle: "Full Container Load",
    accentColor: ORANGE,
    description:
      "Full Container Load shipping gives your cargo exclusive use of a container — maximizing security, minimizing transit time, and providing the most cost-effective solution for large volume shipments.",
    features: [
      "20ft, 40ft, 40ft HC container options",
      "Reefer and open-top containers",
      "Port-to-port and door-to-door",
      "Slot bookings on major shipping lines",
      "Container tracking and milestone alerts",
      "Demurrage and detention management",
    ],
    img: IMG.cargoShipAerial,
    cardDesc:
      "Full Container Load solutions for large shipments with dedicated container space and competitive rates.",
  },
  {
    id: "lcl",
    icon: Layers,
    title: "LCL Services",
    subtitle: "Less than Container Load",
    accentColor: BLUE,
    description:
      "LCL consolidation is ideal for smaller shipments that don't fill a full container. We consolidate your cargo with other shippers on the same trade lane.",
    features: [
      "Weekly consolidation sailings on major routes",
      "CFS to CFS and door-to-door options",
      "Cargo insurance for consolidated loads",
      "Break-bulk cargo handling",
      "Real-time booking and cut-off notifications",
      "Minimum 100 kg / 0.5 CBM acceptance",
    ],
    img: IMG.containerPort,
    cardDesc:
      "Less than Container Load for smaller cargo — consolidated shipping that saves costs without compromising safety.",
  },
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    subtitle: "Express & Charter",
    accentColor: ORANGE,
    description:
      "When speed is the priority, our air freight service delivers. We have negotiated rate agreements with 40+ airlines worldwide, offering express and economy options.",
    features: [
      "Airport-to-airport and door-to-door",
      "Express and standard options",
      "Charter flights for urgent or oversized cargo",
      "Perishables and pharmaceuticals handling",
      "IATA compliance and dangerous goods",
      "Airline partnerships across 150+ airports",
    ],
    img: IMG.airFreight,
    cardDesc:
      "Express air cargo solutions for time-critical shipments with global airline partnerships.",
  },
  {
    id: "door-to-door",
    icon: Truck,
    title: "Door-to-Door",
    subtitle: "Complete Logistics",
    accentColor: BLUE,
    description:
      "Our door-to-door service is the ultimate hands-off solution. We handle pickup from your supplier's door, transportation, customs, and final delivery — single point of contact throughout.",
    features: [
      "Origin pickup and export customs",
      "Ocean or air main carriage",
      "Destination customs clearance",
      "Last-mile delivery and POD",
      "Integrated tracking dashboard",
      "Single invoice, single contact",
    ],
    img: IMG.warehouse,
    cardDesc:
      "Complete end-to-end logistics from origin pickup to final destination delivery with full tracking.",
  },
  {
    id: "customs",
    icon: Globe,
    title: "Customs Clearance",
    subtitle: "Regulatory Compliance",
    accentColor: ORANGE,
    description:
      "Expert customs brokerage and regulatory compliance across all major trade corridors. Our licensed brokers navigate complex tariff classifications and duty optimization.",
    features: [
      "Licensed customs brokerage in 40+ countries",
      "HS code classification and tariff advice",
      "Duty drawback and deferment programs",
      "AEO/C-TPAT compliance programs",
      "Pre-arrival customs filing",
      "Trade sanctions screening",
    ],
    img: IMG.teamMeeting,
    cardDesc:
      "Expert customs brokerage and regulatory compliance across all major trade corridors.",
  },
];

const WHY_ITEMS = [
  {
    icon: Shield,
    title: "Fully Insured Cargo",
    desc: "All shipments covered with comprehensive cargo insurance for complete peace of mind.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    desc: "ISO 9001:2015 certified operations with documented quality management processes.",
  },
  {
    icon: Zap,
    title: "Fast Customs Clearance",
    desc: "Pre-vetted customs pathways with our licensed brokers that minimize port dwell time.",
  },
];

const TIMELINE = [
  { year: "2023", title: "Founded", desc: "Established as a focused regional freight forwarder with a commitment to logistics precision and excellence." },
  { year: "2024", title: "Digital Integration", desc: "Launched optimized route alignment structures delivering transparent visibility loops to clients." },
  { year: "2026", title: "Today & Beyond", desc: "Providing dynamic multimodal end-to-end transport coordination and strategic supply management lanes globally." },
];

// ─── Reusable: FadeIn ─────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const initial =
    direction === "up"
      ? { opacity: 0, y: 48 }
      : direction === "left"
      ? { opacity: 0, x: -48 }
      : direction === "right"
      ? { opacity: 0, x: 48 }
      : { opacity: 0 };
  const animate = inView
    ? { opacity: 1, y: 0, x: 0 }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Reusable: SectionLabel ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block font-bold uppercase tracking-widest text-xs mb-3"
      style={{ color: ORANGE }}
    >
      {children}
    </span>
  );
}

// ─── Reusable: SectionHeading ─────────────────────────────────────────────────
function SectionHeading({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className="font-display font-black leading-none"
      style={{
        color: light ? "#ffffff" : NAVY,
        fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
      }}
    >
      {children}
    </h2>
  );
}

// ─── Service Card (small, used in overviews) ──────────────────────────────────
function ServiceCard({
  service,
  onSelect,
}: {
  service: (typeof SERVICES_DATA)[0];
  onSelect: () => void;
}) {
  const Icon = service.icon;
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onSelect}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="relative bg-white border border-gray-100 rounded-2xl p-7 cursor-pointer overflow-hidden h-full text-left select-none"
      style={{
        boxShadow: hovered
          ? `0 20px 60px ${service.accentColor}18`
          : "0 2px 16px rgba(0,0,0,0.05)",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${service.accentColor}08, transparent 60%)`,
        }}
      />
      <motion.div
        animate={{ scale: hovered ? 1.12 : 1, rotate: hovered ? 6 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-13 h-13 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: `${service.accentColor}18`, width: 52, height: 52 }}
      >
        <Icon className="w-6 h-6" style={{ color: service.accentColor }} />
      </motion.div>
      <h3
        className="font-display font-black text-xl mb-2"
        style={{ color: NAVY }}
      >
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">
        {service.cardDesc}
      </p>
      <div
        className="flex items-center gap-1 text-sm font-bold"
        style={{ color: service.accentColor }}
      >
        Learn more
        <motion.div animate={{ x: hovered ? 5 : 0 }}>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl origin-left"
        style={{ backgroundColor: service.accentColor }}
      />
    </motion.div>
  );
}

// ─── Why Card ──────────────────────────────────────────────────────────────────
function WhyCard({ item }: { item: (typeof WHY_ITEMS)[0] }) {
  const Icon = item.icon;
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      className="relative bg-white rounded-2xl p-7 border border-blue-50 overflow-hidden cursor-default transition-shadow"
      style={{
        boxShadow: hovered
          ? `0 12px 48px ${BLUE}18`
          : "0 2px 12px rgba(0,0,0,0.04)",
      }}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${BLUE}06, transparent)`,
        }}
      />
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ duration: 0.3 }}
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ backgroundColor: NAVY }}
      >
        <Icon className="w-6 h-6" style={{ color: BLUE }} />
      </motion.div>
      <h3
        className="font-display font-black text-lg mb-2"
        style={{ color: NAVY }}
      >
        {item.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (p: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  const goTo = (id: string) => {
    setMobileOpen(false);
    if (id === "contact") {
      setActivePage("home");
      setTimeout(
        () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
        80
      );
    } else {
      setActivePage(id);
      window.scrollTo({ top: 0 });
    }
  };

  const isSolidBackground = scrolled || activePage !== "home";

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isSolidBackground ? `${NAVY}f5` : "transparent",
          backdropFilter: isSolidBackground ? "blur(12px)" : "none",
          boxShadow: isSolidBackground ? "0 4px 32px rgba(10,61,98,0.25)" : "none",
          borderBottom: isSolidBackground ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => goTo("home")}
              className="flex items-center gap-3 group text-left focus:outline-none flex-shrink-0"
            >
              <img 
                src="/logo.png" 
                alt="Valcargo Logo" 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display font-black text-2xl text-white tracking-tight">
                VAL<span style={{ color: ORANGE }}>CARGO</span>
              </span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  onClick={() => goTo(item.id)}
                  className="relative text-xs font-bold uppercase tracking-widest transition-colors duration-200 py-2 hover:text-white"
                  style={{
                    color:
                      activePage === item.id
                        ? ORANGE
                        : isSolidBackground
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(255,255,255,0.9)",
                  }}
                >
                  {item.label}
                  {activePage === item.id && item.id !== "contact" && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: ORANGE }}
                    />
                  )}
                </motion.button>
              ))}
              <button
                onClick={() => goTo("contact")}
                className="text-white font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded-lg transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: ORANGE }}
              >
                Get Quote
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2 focus:outline-none"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-0 right-0 z-40 border-t border-white/10"
          style={{ background: `${NAVY}f8`, backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className="block w-full text-left py-3 text-sm font-bold uppercase tracking-widest border-b border-white/10 last:border-0 transition-colors"
                style={{
                  color: activePage === item.id ? ORANGE : "rgba(255,255,255,0.8)",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ onNavigate }: { onNavigate: (p: string) => void }) {
  const floaters = [
    { x: "8%", y: "35%", color: BLUE, delay: 0, w: 64, h: 40 },
    { x: "82%", y: "22%", color: ORANGE, delay: 0.6, w: 48, h: 30 },
    { x: "72%", y: "60%", color: BLUE, delay: 1.2, w: 36, h: 24 },
    { x: "18%", y: "72%", color: ORANGE, delay: 1.8, w: 56, h: 35 },
    { x: "90%", y: "48%", color: BLUE, delay: 2.4, w: 42, h: 26 },
  ];

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url(${IMG.heroShip})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${NAVY}f5 0%, ${NAVY}c0 50%, ${NAVY}70 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${NAVY}cc 0%, transparent 60%)`,
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(${BLUE} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {floaters.map((f, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block rounded-sm"
          style={{
            left: f.x,
            top: f.y,
            width: f.w,
            height: f.h,
            backgroundColor: f.color,
            opacity: 0.12,
            borderRadius: 4,
          }}
          animate={{ y: [0, -14, 0], rotate: [0, 2, 0], opacity: [0.12, 0.18, 0.12] }}
          transition={{
            duration: 5 + i * 0.7,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 flex justify-start">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 border rounded-full px-4 py-2 mb-8"
            style={{
              background: `${ORANGE}1a`,
              borderColor: `${ORANGE}50`,
              color: ORANGE,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: ORANGE }}
            />
            <span className="text-xs font-bold uppercase tracking-widest">
              Global Freight Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display font-black text-white leading-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            MOVING CARGO,
            <br />
            <span style={{ color: BLUE }}>BUILDING</span>
            <br />
            TRUST.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Valcargo delivers end-to-end freight forwarding, FCL, LCL, air
            freight, and door-to-door logistics solutions across global routes.
          </motion.p>

          <div className="flex flex-wrap gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: ORANGE,
                boxShadow: `0 8px 32px ${ORANGE}40`,
              }}
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 text-white border-2 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Services Overview ─────────────────────────────────────────────────────────
function ServicesOverview({ onServiceSelect }: { onServiceSelect: (serviceId: string) => void }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <SectionHeading>
                COMPLETE LOGISTICS
                <br />
                SOLUTIONS
              </SectionHeading>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm md:text-right">
              From air to sea, single pallets to full containers — we provide
              the complete spectrum of freight forwarding services.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_DATA.map((service, i) => (
            <FadeIn key={service.id} delay={service.id === "freight-forwarding" ? 0 : i * 0.08}>
              <ServiceCard 
                service={service} 
                onSelect={() => onServiceSelect(service.id)}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-12">
          <button
            onClick={() => onServiceSelect(SERVICES_DATA[0].id)}
            className="group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: NAVY }}
          >
            View All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Why Choose Section ──────────────────────────────────────────────────────
function WhyChoose() {
  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(135deg, #f4f8ff 0%, #eaf2ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <SectionLabel>Why Us</SectionLabel>
          <SectionHeading>THE VALCARGO ADVANTAGE</SectionHeading>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_ITEMS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <WhyCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Commitment Timeline ──────────────────────────────────────────────────────
function CommitmentTimeline() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: NAVY }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel>Our Journey</SectionLabel>
          <SectionHeading light>
            OUR STRATEGIC
            <br />
            COMMITMENT
          </SectionHeading>
        </FadeIn>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <FadeIn
                key={item.year}
                delay={i * 0.12}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex flex-col md:flex-row items-stretch gap-6 ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
                    }`}
                  >
                    <div
                      className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="font-display font-black mb-1"
                        style={{ color: ORANGE, fontSize: "2.4rem" }}
                      >
                        {item.year}
                      </div>
                      <div className="text-white font-bold text-lg mb-2">
                        {item.title}
                      </div>
                      <div className="text-white/55 text-sm leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center flex-shrink-0 w-5">
                    <div
                      className="w-4 h-4 rounded-full border-4"
                      style={{
                        backgroundColor: ORANGE,
                        borderColor: NAVY,
                        boxShadow: `0 0 0 4px ${ORANGE}40`,
                      }}
                    />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <section className="relative py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.containerPort})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: `${NAVY}e8` }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <SectionLabel>Ready to Ship?</SectionLabel>
          <SectionHeading light>
            GET YOUR SHIPMENT
            <br />
            MOVING TODAY
          </SectionHeading>
          <p className="text-white/60 text-lg mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need ocean freight, air cargo, or door-to-door
            logistics — Valcargo has the expertise and network to deliver.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: ORANGE,
                boxShadow: `0 8px 32px ${ORANGE}40`,
              }}
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate("services")}
              className="font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg transition-all text-white border-2 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              Explore Services
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full border rounded-lg px-4 py-3 text-sm focus:outline-none transition-all text-gray-700 bg-white";

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionHeading>REQUEST A QUOTE</SectionHeading>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h3
                  className="font-display font-black text-2xl mb-3"
                  style={{ color: NAVY }}
                >
                  {"LET'S TALK LOGISTICS"}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Our freight experts are ready to design a shipping solution
                  tailored to your business needs. Get a competitive quote
                  within 24 hours.
                </p>
              </div>

              {[
                { icon: Phone, label: "Phone", value: "+971 4 123 4567" },
                { icon: Mail, label: "Email", value: "info@valcargo.com" },
                {
                  icon: MapPin,
                  label: "Head Office",
                  value: "Business Bay, Dubai, UAE",
                },
                { icon: Clock, label: "Hours", value: "Mon–Fri 8:00–18:00 GST" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: NAVY }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: BLUE }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                      {c.label}
                    </div>
                    <div className="font-semibold text-sm" style={{ color: NAVY }}>
                      {c.value}
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="rounded-2xl overflow-hidden h-52 mt-4"
                style={{
                  backgroundImage: `url(${IMG.cargoShipAerial})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: NAVY,
                }}
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-14 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center h-full"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3
                  className="font-display font-black text-2xl mb-2"
                  style={{ color: NAVY }}
                >
                  Quote Requested!
                </h3>
                <p className="text-gray-500 text-sm">
                  {"We'll send your freight quote within 24 business hours."}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputClass}
                      style={{ borderColor: "rgba(10,61,98,0.15)" }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={inputClass}
                      style={{ borderColor: "rgba(10,61,98,0.15)" }}
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className={inputClass}
                      style={{ borderColor: "rgba(10,61,98,0.15)" }}
                      placeholder="+971 50 000 0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                      Service
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className={inputClass}
                      style={{ borderColor: "rgba(10,61,98,0.15)" }}
                    >
                      <option value="">Select service…</option>
                      <option>Freight Forwarding</option>
                      <option>FCL Services</option>
                      <option>LCL Services</option>
                      <option>Air Freight</option>
                      <option>Door-to-Door</option>
                      <option>Customs Clearance</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                    style={{ borderColor: "rgba(10,61,98,0.15)" }}
                    placeholder="Describe your shipment needs, origin, destination, volume…"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="w-full text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
                  style={{ backgroundColor: loading ? BLUE : NAVY }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────
function AboutPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      desc: "Complete transparency in pricing, timelines, and service delivery — no surprises, ever.",
    },
    {
      icon: Star,
      title: "Excellence",
      desc: "Every shipment, regardless of size or route, receives the same precision and care.",
    },
    {
      icon: Users,
      title: "Partnership",
      desc: "Long-term relationships built on understanding each client's unique supply chain needs.",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Continuous investment in technology that gives our clients a measurable competitive edge.",
    },
  ];

  return (
    <div className="pt-20">
      <div
        className="relative py-36 overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${IMG.teamMeeting})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${NAVY}f0 0%, ${NAVY}80 100%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>About Valcargo</SectionLabel>
            <h1
              className="font-display font-black text-white leading-none mt-3"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              STRATEGIC
              <br />
              <span style={{ color: BLUE }}>MOVING TRUST.</span>
            </h1>
          </FadeIn>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div
                className="rounded-2xl overflow-hidden h-96"
                style={{
                  backgroundImage: `url(${IMG.warehouse})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: NAVY,
                }}
              />
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <SectionLabel>Who We Are</SectionLabel>
              <SectionHeading>
                TRUSTED FREIGHT
                <br />
                PARTNERS SINCE 2023
              </SectionHeading>
              <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-4">
                Valcargo was founded in 2023 with a singular mission:
                make international freight forwarding reliable, transparent, and
                accessible to businesses of all sizes. From our sea freight
                consignments to total multimodal coordination paths, we have built
                our reputation shipment by shipment.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Today, we operate routes across key global target lanes, with
                specialized configurations for ocean freight (FCL & LCL), air cargo,
                customs clearance, and last-mile logistics management loops.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #f4f8ff, #eaf2ff)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <SectionLabel>Our Purpose</SectionLabel>
            <SectionHeading>MISSION & VISION</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                label: "Our Mission",
                icon: Target,
                body: "To deliver world-class freight forwarding services that empower businesses to trade globally with confidence. We achieve this through deep logistics expertise, advanced technology, and a relentless commitment to on-time delivery.",
              },
              {
                label: "Our Vision",
                icon: Globe,
                body: "To be the world's most trusted independent freight forwarder — recognized for our integrity, innovation, and the measurable value we create for every client's supply chain.",
              },
            ].map((item) => (
              <FadeIn key={item.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-10 border border-blue-50 h-full"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: NAVY }}
                  >
                    <item.icon
                      className="w-7 h-7"
                      style={{ color: ORANGE }}
                    />
                  </div>
                  <h3
                    className="font-display font-black text-2xl mb-4"
                    style={{ color: NAVY }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.body}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <SectionLabel>What We Stand For</SectionLabel>
            <SectionHeading>CORE VALUES</SectionHeading>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: NAVY }}
                  >
                    <v.icon
                      className="w-8 h-8"
                      style={{ color: ORANGE }}
                    />
                  </div>
                  <h3
                    className="font-display font-black text-xl mb-3"
                    style={{ color: NAVY }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <SectionLabel>Our Promise</SectionLabel>
              <SectionHeading light>
                THE VALCARGO
                <br />
                QUALITY PROMISE
              </SectionHeading>
              <p className="text-white/60 text-sm leading-relaxed mt-5 mb-8">
                Every shipment we handle carries the weight of our promise:
                competitive pricing, transparent communication, and delivery you
                can count on. We do not just move cargo — we move your business
                forward.
              </p>
              <ul className="space-y-4">
                {[
                  "Optimized delivery configuration across trade lanes",
                  "ISO 9001:2015 certified quality management pathways",
                  "Dedicated manager support loop for every client tier",
                  "Same-day document feedback loops during active window hours",
                  "Full asset visibility options on every shipment path",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: ORANGE }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate("services")}
                className="mt-10 group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: ORANGE }}
              >
                View Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div
                className="rounded-2xl overflow-hidden h-96"
                style={{
                  backgroundImage: `url(${IMG.warehouseForklift})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: NAVY,
                }}
              />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Services Page ────────────────────────────────────────────────────────────
function ServicesPage({ defaultServiceId }: { defaultServiceId: string }) {
  const [activeId, setActiveId] = useState(defaultServiceId);

  // Synchronize state if parent passes down an updated target identifier
  useEffect(() => {
    setActiveId(defaultServiceId);
  }, [defaultServiceId]);

  const current = SERVICES_DATA.find((s) => s.id === activeId)!;

  return (
    <div className="pt-20">
      <div
        className="relative py-36 overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${IMG.containerPort})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(105deg, ${NAVY}f0 0%, ${NAVY}70 100%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionLabel>What We Do</SectionLabel>
            <h1
              className="font-display font-black text-white leading-none mt-3"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
            >
              OUR SERVICES
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="sticky top-20 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {SERVICES_DATA.map((s) => {
              const Icon = s.icon;
              const active = activeId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className="flex items-center gap-2 px-5 py-4 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap transition-all flex-shrink-0"
                  style={{
                    borderColor: active ? ORANGE : "transparent",
                    color: active ? NAVY : "#9ca3af",
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: active ? ORANGE : undefined }} />
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: current.accentColor }}
              >
                <current.icon className="w-4 h-4" />
                {current.subtitle}
              </div>
              <SectionHeading>
                {current.title.toUpperCase()}
              </SectionHeading>
              <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-8">
                {current.description}
              </p>
              <ul className="space-y-3 mb-8">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${current.accentColor}1a` }}
                    >
                      <Check
                        className="w-3 h-3"
                        style={{ color: current.accentColor }}
                      />
                    </div>
                    <span className="text-gray-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 rounded-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: current.accentColor,
                  boxShadow: `0 8px 24px ${current.accentColor}30`,
                }}
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div
              className="rounded-2xl overflow-hidden h-96"
              style={{
                backgroundImage: `url(${current.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: NAVY,
              }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-10">
            <h3 className="font-display font-black text-2xl" style={{ color: NAVY }}>
              ALL SERVICES AT A GLANCE
            </h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES_DATA.map((s, i) => {
              const active = activeId === s.id;
              const Icon = s.icon;
              return (
                <FadeIn key={s.id} delay={i * 0.06}>
                  <motion.button
                    whileHover={{ y: -4 }}
                    onClick={() => {
                      setActiveId(s.id);
                      window.scrollTo({ top: 0 });
                    }}
                    className="w-full text-left p-5 rounded-2xl border transition-all"
                    style={{
                      backgroundColor: active ? NAVY : "white",
                      borderColor: active ? NAVY : "rgba(0,0,0,0.07)",
                      boxShadow: active
                        ? `0 8px 32px ${NAVY}30`
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <Icon
                      className="w-6 h-6 mb-3"
                      style={{ color: active ? ORANGE : s.accentColor }}
                    />
                    <div
                      className="font-bold text-xs leading-tight"
                      style={{ color: active ? "white" : NAVY }}
                    >
                      {s.title}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{
                        color: active
                          ? "rgba(255,255,255,0.5)"
                          : "#9ca3af",
                      }}
                    >
                      {s.subtitle}
                    </div>
                  </motion.button>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <footer style={{ backgroundColor: "#061f33" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="/logo.png" 
                alt="Valcargo Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-black text-xl text-white">
                VAL<span style={{ color: ORANGE }}>CARGO</span>
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Delivering trust, reliability, and efficiency in every shipment.
            </p>
          </div>

          <div>
            <h4
              className="font-bold uppercase tracking-widest text-xs mb-5"
              style={{ color: ORANGE }}
            >
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                "Freight Forwarding",
                "FCL Services",
                "LCL Services",
                "Air Freight",
                "Door-to-Door",
                "Customs Clearance",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => {
                      setActivePage("services");
                      window.scrollTo({ top: 0 });
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold uppercase tracking-widest text-xs mb-5"
              style={{ color: ORANGE }}
            >
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/45">
              {[
                { label: "About Us", page: "about" },
                { label: "Our Services", page: "services" },
                { label: "Careers", page: "home" },
                { label: "Contact", page: "contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      setActivePage(item.page === "contact" ? "home" : item.page);
                      window.scrollTo({ top: 0 });
                      if (item.page === "contact")
                        setTimeout(
                          () =>
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" }),
                          80
                        );
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold uppercase tracking-widest text-xs mb-5"
              style={{ color: ORANGE }}
            >
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-white/45">
              {[
                { Icon: MapPin, v: "Business Bay, Dubai, UAE" },
                { Icon: Phone, v: "+971 4 123 4567" },
                { Icon: Mail, v: "info@valcargo.com" },
              ].map(({ Icon, v }) => (
                <li key={v} className="flex items-start gap-3">
                  <Icon
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: BLUE }}
                  />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2026 Valcargo International Freight LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <button
                  key={item}
                  className="text-white/25 text-xs hover:text-white/60 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
function HomePage({ onNavigate, onServiceSelect }: { onNavigate: (p: string) => void; onServiceSelect: (serviceId: string) => void }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <ServicesOverview onServiceSelect={onServiceSelect} />
      <WhyChoose />
      <CommitmentTimeline />
      <ContactSection />
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES_DATA[0].id);

  const navigate = (page: string) => {
    if (page === "contact") {
      setActivePage("home");
      setTimeout(
        () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
        80
      );
    } else {
      setActivePage(page);
      window.scrollTo({ top: 0 });
    }
  };

  // Triggers redirect to the active tab component while passing down the selection index
  const handleServiceSelect = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setActivePage("services");
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={activePage} setActivePage={navigate} />
      {activePage === "home" && (
        <HomePage onNavigate={navigate} onServiceSelect={handleServiceSelect} />
      )}
      {activePage === "about" && <AboutPage onNavigate={navigate} />}
      {activePage === "services" && (
        <ServicesPage defaultServiceId={selectedServiceId} />
      )}
      <Footer setActivePage={navigate} />
    </div>
  );
}