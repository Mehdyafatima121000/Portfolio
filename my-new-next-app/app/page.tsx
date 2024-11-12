"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/projects"; // Make sure the filename matches
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import AOS from "aos"
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,})
    },[]);
  return (
    <main>
      <Hero />
      <Skills />
      <Contact />
      <About />
      <Projects /> {/* Capitalize "Projects" to match the imported component */}
      
    </main>
  );
}