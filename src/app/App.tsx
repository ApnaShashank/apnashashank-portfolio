import { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Rocket, 
  Book, 
  Laptop, 
  Lightbulb, 
  Trophy,
  Target,
  Code,
  Smile,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Link2
} from "lucide-react";
import { CertificateCard } from "@/app/components/CertificateCard";
import { DegreeCard } from "@/app/components/DegreeCard";
import { SkillCard } from "@/app/components/SkillCard";
import { ExploreCard } from "@/app/components/ExploreCard";
import { FloatingSticker } from "@/app/components/FloatingSticker";
import { Doodle } from "@/app/components/Doodle";
import {
  Dialog,
  DialogContent,
} from "@/app/components/ui/dialog";

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<{ imageUrl: string; title: string; platform: string } | null>(null);
  const certificates = [
    {
      title: "Advanced Diploma in Computer Applications",
      platform: "Offline",
      imageUrl: "/adca.jpg",
      rotation: -2,
    },
    {
      title: "Generative AI for All",
      platform: "PW",
      imageUrl: "/generativeaipw.jpg",
      rotation: 3,
    },
    {
      title: "Java Script Programming",
      platform: "Udemy",
      imageUrl: "/jsudemy.jpg",
      rotation: -1,
    },
    {
      title: "Foundation of Prompt Engineering",
      platform: "AWS",
      imageUrl: "/awsprompt.jpg",
      rotation: 2,
    },
    {
      title: "Complete Python Bootcamp",
      platform: "Code With Harry",
      imageUrl: "/pythoncwh.jpg",
      rotation: -3,
    },
    {
      title: "Russian as a Foreign Language",
      platform: "Synergy University",
      imageUrl: "/russianlanguage.jpg",
      rotation: 1,
    },
    {
      title: "Community Influencing Internship",
      platform: "Internshala",
      imageUrl: "/internship1.jpg",
      rotation: -2,
    },
    {
      title: "Intro to Programming",
      platform: "Kaggle",
      imageUrl: "/programming.jpg",
      rotation: 2,
    },
  ];

  const degrees = [
    {
      degree: "Bachelor of Computer Application",
      university: "Shoolini University",
      year: "2024 - 2027",
      imageUrl: "https://images.unsplash.com/photo-1740065592671-9cb593ee9b78?w=400",
    },
    {
      degree: "Industrial Training Institute(Electrician)",
      university: "Kapil Dev Singh Private ITI",
      year: "2023 - 2025",
      imageUrl: "https://play-lh.googleusercontent.com/zCP6pc0UHt8dmTcjEjyOXUXNudLEqq7-PnyYdZNikY-JoRTln3hKkSlL_GErMtVNeQb9",
    },
  ];

  const skills = [
    { name: "HTML", Icon: Code, bgColor: "bg-orange-100", iconColor: "text-orange-500" },
    { name: "CSS", Icon: Sparkles, bgColor: "bg-blue-100", iconColor: "text-blue-500" },
    { name: "JavaScript", Icon: Code, bgColor: "bg-yellow-100", iconColor: "text-yellow-600" },
    { name: "ReactJS", Icon: Target, bgColor: "bg-sky-100", iconColor: "text-sky-600" },
    { name: "GitHub", Icon: Github, bgColor: "bg-purple-100", iconColor: "text-purple-600" },
    { name: "Python", Icon: Code, bgColor: "bg-green-100", iconColor: "text-green-600" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      imageUrl: "https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d?w=600",
      rotation: -2,
    },
    {
      title: "Portfolio Website",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600",
      rotation: 2,
    },
    {
      title: "Task Management App",
      imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600",
      rotation: -1,
    },
    {
      title: "Weather Dashboard",
      imageUrl: "https://images.unsplash.com/photo-1689896506056-8ddcc17eba33?w=600",
      rotation: 3,
    },
  ];

  const explore = [
    {
      title: "GitHub Repositories",
      description: "Explore my open-source projects and contributions.",
      icon: Github,
      link: "https://github.com/apnashashank",
    },
    {
      title: "LinkedIn Profile",
      description: "Connect with me on LinkedIn to learn more about my professional journey.",
      icon: Book,
      link: "https://www.linkedin.com/in/apnashank",
    },
    {
      title: "Portfolio Website",
      description: "Visit my portfolio to see my latest projects and achievements.",
      icon: Laptop,
      link: "https://shashankgupta123.github.io/portfolio",
    },
    {
      title: "Blog",
      description: "Read my blog for insights on technology, learning, and personal growth.",
      icon: Lightbulb,
      link: "https://shashankgupta123.github.io/blog",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-yellow-50 to-pink-50 relative overflow-hidden">
      {/* Background doodles */}
      <Doodle type="star" color="#FCD34D" size={60} position={{ top: "10%", left: "5%" }} rotation={15} />
      <Doodle type="circle" color="#93C5FD" size={80} position={{ top: "15%", right: "8%" }} rotation={-20} />
      <Doodle type="wave" color="#D8B4FE" size={100} position={{ top: "40%", left: "3%" }} rotation={45} />
      <Doodle type="heart" color="#FDA4AF" size={50} position={{ top: "60%", right: "5%" }} rotation={-15} />
      <Doodle type="sparkle" color="#FDE047" size={40} position={{ top: "80%", left: "10%" }} rotation={30} />
      <Doodle type="zigzag" color="#6EE7B7" size={70} position={{ top: "90%", right: "15%" }} rotation={-10} />
      <Doodle type="arrow" color="#C084FC" size={60} position={{ top: "25%", left: "50%" }} rotation={135} />

      {/* Floating stickers */}
      <FloatingSticker 
        Icon={Rocket} 
        color="text-purple-400" 
        size={48}
        position={{ top: "5%", right: "15%" }}
        rotation={-15}
        delay={0}
      />
      <FloatingSticker 
        Icon={Lightbulb} 
        color="text-yellow-400" 
        size={44}
        position={{ top: "30%", left: "8%" }}
        rotation={20}
        delay={0.5}
      />
      <FloatingSticker 
        Icon={Book} 
        color="text-pink-400" 
        size={40}
        position={{ top: "70%", right: "10%" }}
        rotation={-10}
        delay={1}
      />
      <FloatingSticker 
        Icon={Trophy} 
        color="text-orange-400" 
        size={42}
        position={{ top: "85%", left: "12%" }}
        rotation={15}
        delay={1.5}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-20">
        {/* Name Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="relative inline-block">
            <h1 
              className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-4"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Shashank Gupta
            </h1>
            
            {/* Doodles around name */}
            <Doodle type="star" color="#F59E0B" size={35} position={{ top: "-10px", left: "-40px" }} rotation={25} opacity={0.8} />
            <Doodle type="sparkle" color="#EC4899" size={30} position={{ top: "0px", right: "-35px" }} rotation={-15} opacity={0.8} />
            <Doodle type="star" color="#8B5CF6" size={25} position={{ bottom: "10px", left: "20%" }} rotation={-30} opacity={0.8} />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 flex items-center justify-center gap-3 flex-wrap"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span>Certificates</span>
            <span className="text-pink-400">•</span>
            <span>Degrees</span>
            <span className="text-purple-400">•</span>
            <span>Skills</span>
            <span className="text-orange-400">•</span>
            <span>Journey</span>
          </motion.p>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20 relative"
        >
          {/* Linktree Logo - Top of the box */}
          <motion.a
            href="https://tr.ee/shashank"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: -10, rotate: 0 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotate: [0, 0, 360]
            }}
            transition={{ 
              opacity: { duration: 0.5 },
              y: { duration: 0.5 },
              rotate: { 
                times: [0, 0.8, 1],
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
              <Link2 size={24} className="text-black" />
            </div>
          </motion.a>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-yellow-200">
            <div className="flex flex-wrap gap-6 items-start">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gradient-to-br from-sky-400 to-purple-500">
                  <img
                    src="/profile.jpg"
                    alt="Shashank Gupta"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h2 
                  className="text-3xl font-bold text-gray-800"
                  style={{ fontFamily: 'Baloo 2, sans-serif' }}
                >
                  Hey there! 👋
                </h2>
                <p 
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  I'm a passionate learner and tech enthusiast exploring the exciting worlds of 
                  <span className="font-semibold text-purple-600"> AI</span>,
                  <span className="font-semibold text-sky-600"> programming</span>, and
                  <span className="font-semibold text-pink-600"> creative problem-solving</span>.
                  This is my digital showcase of achievements, certifications, and the journey of continuous learning!
                </p>
                
                <div className="flex gap-3 flex-wrap">
                  <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Code size={16} className="inline mr-1" />
                    Developer
                  </span>
                  <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Target size={16} className="inline mr-1" />
                    Learner
                  </span>
                  <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <Laptop size={16} className="inline mr-1" />
                    Creator
                  </span>
                </div>
              </div>
            </div>

            {/* Sticker decorations */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg flex items-center justify-center rotate-12">
              <Sparkles size={28} className="text-white" />
            </div>
          </div>
        </motion.div>

        {/* Certificates Section */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative inline-block"
          >
            <h2 
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              My Certificates ✨
            </h2>
            <div 
              className="absolute -bottom-2 left-0 h-2 bg-yellow-300 rounded-full"
              style={{ width: '60%' }}
            ></div>
          </motion.div>

          {/* Pinterest-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                title={cert.title}
                platform={cert.platform}
                imageUrl={cert.imageUrl}
                rotation={cert.rotation}
                delay={index * 0.1}
                onClick={() => cert.imageUrl && setSelectedCertificate({ imageUrl: cert.imageUrl, title: cert.title, platform: cert.platform })}
              />
            ))}
          </div>

          {/* Handwritten note */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="mt-12 max-w-md mx-auto md:ml-auto md:mr-12 bg-yellow-100 p-6 rounded-2xl shadow-lg border-2 border-yellow-300"
            style={{ transform: 'rotate(-3deg)' }}
          >
            <p 
              className="text-lg text-gray-700 italic"
              style={{ fontFamily: 'Permanent Marker, cursive' }}
            >
              "Every certificate is a step forward in my learning journey! 🚀"
            </p>
          </motion.div>
        </div>

        {/* Degrees Section */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative inline-block"
          >
            <h2 
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              My Degrees & Education 🎓
            </h2>
            <div 
              className="absolute -bottom-2 left-0 h-2 bg-pink-300 rounded-full"
              style={{ width: '70%' }}
            ></div>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {degrees.map((degree, index) => (
              <DegreeCard
                key={index}
                degree={degree.degree}
                university={degree.university}
                year={degree.year}
                imageUrl={degree.imageUrl}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative inline-block"
          >
            <h2 
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              My Skills 💪
            </h2>
            <div 
              className="absolute -bottom-2 left-0 h-2 bg-yellow-300 rounded-full"
              style={{ width: '60%' }}
            ></div>
          </motion.div>

          {/* Pinterest-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                Icon={skill.Icon}
                bgColor={skill.bgColor}
                iconColor={skill.iconColor}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Handwritten note */}
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="mt-12 max-w-md mx-auto md:ml-auto md:mr-12 bg-purple-100 p-6 rounded-2xl shadow-lg border-2 border-purple-300"
            style={{ transform: 'rotate(3deg)' }}
          >
            <p 
              className="text-lg text-gray-700 italic"
              style={{ fontFamily: 'Permanent Marker, cursive' }}
            >
              "Building with code, one skill at a time! 💻✨"
            </p>
          </motion.div>
        </div>

        {/* Explore Section */}
        <div className="mb-24 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative inline-block"
          >
            <h2 
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Explore My Work 🚀
            </h2>
            <div 
              className="absolute -bottom-2 left-0 h-2 bg-orange-300 rounded-full"
              style={{ width: '65%' }}
            ></div>
          </motion.div>

          {/* Pinterest-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ExploreCard
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                rotation={project.rotation}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 relative"
        >
          <div className="inline-block relative">
            <p 
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
              style={{ fontFamily: 'Baloo 2, sans-serif' }}
            >
              Learning • Growing • Collecting Achievements 🌱
            </p>
            
            <Doodle type="heart" color="#FB923C" size={40} position={{ top: "-20px", right: "-50px" }} rotation={20} opacity={0.9} />
            <Doodle type="sparkle" color="#A78BFA" size={35} position={{ bottom: "-15px", left: "-40px" }} rotation={-25} opacity={0.9} />
          </div>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/apnashashank/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Linkedin size={20} className="text-black" />
            </motion.a>
            <motion.a
              href="https://twitter.com/apnashashank"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Twitter size={20} className="text-black" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/life.on.coder/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Instagram size={20} className="text-black" />
            </motion.a>
            <motion.a
              href="https://github.com/apnashashank"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <Github size={20} className="text-black" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={(open) => !open && setSelectedCertificate(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none overflow-hidden">
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-gradient-to-br from-yellow-50 via-white to-purple-50 rounded-3xl p-6 md:p-8 shadow-2xl"
              style={{
                border: "8px solid transparent",
                background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #FCD34D, #F59E0B, #EC4899, #8B5CF6) border-box",
              }}
            >
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg"></div>

              {/* Certificate Title */}
              <div className="text-center mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Baloo 2, sans-serif' }}>
                  {selectedCertificate.title}
                </h3>
                <p className="text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedCertificate.platform}
                </p>
              </div>

              {/* Certificate Image Container */}
              <div className="relative bg-white rounded-2xl p-4 shadow-inner border-4 border-yellow-200 overflow-auto max-h-[75vh]">
                <div className="flex items-center justify-center min-h-[400px] p-4">
                  <img
                    src={selectedCertificate.imageUrl}
                    alt={selectedCertificate.title}
                    className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg"
                    style={{ 
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Decorative tape strips */}
              <div className="absolute top-8 left-1/4 w-20 h-6 bg-yellow-200/80 rotate-12 shadow-md"></div>
              <div className="absolute top-8 right-1/4 w-20 h-6 bg-pink-200/80 -rotate-12 shadow-md"></div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}